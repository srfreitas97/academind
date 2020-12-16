$(function(){

	var operacao = "A"; //"A"=Adição; "E"=Edição

	var indice_selecionado = -1;

	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados

	tbClientes = JSON.parse(tbClientes); // Converte string para objeto

	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbClientes = [];

	function Adicionar(){
		var cliente = JSON.stringify({
			Nome    : $("#txtNome").val(),
			Titulo    : $("#txtTitulo").val(),
			Mensagem    : $("#txtMensagem").val(),
		});

		tbClientes.push(cliente);

		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));

		alert("Registro adicionado.");
		return true;
	}

	function Editar(){
		tbClientes[indice_selecionado] = JSON.stringify({
				Nome    : $("#txtNome").val(),
				Titulo    : $("#txtTitulo").val(),
				Mensagem    : $("#txtMensagem").val(),
			});
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Informações editadas.")
		operacao = "A";
		return true;
	}

	function Listar(){
		$("#tblListar").html("");
		$("#tblListar").html(
			"<thead>"+
			"	<tr>"+
			"<th></th>"+
			"	<th>Autor</th>"+
			"	<th>Título</th>"+
			"	<th>Publicação</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbClientes){
			var cli = JSON.parse(tbClientes[i]);
		  	$("#tblListar tbody").append("<tr>"+
									 	 "	<td><img src='edit.png' alt='"+i+"' class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
										 "	<td>"+cli.Nome+"</td>" +
										 "	<td>"+cli.Titulo+"</td>" + 
										 "	<td>"+cli.Mensagem+"</td>" + 
		  								 "</tr>");
		 }
	}

	function Excluir(){
		tbClientes.splice(indice_selecionado, 1);
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Registro excluído.");
	}

	function GetCliente(propriedade, valor){
		var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}

	Listar();

	$("#frmCadastro").on("submit",function(){
		if(operacao == "A")
			return Adicionar();
		else
			return Editar();		
	});

	$("#tblListar").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var cli = JSON.parse(tbClientes[indice_selecionado]);
		$("#txtNome").val(cli.Nome);
		$("#txtTitulo").val(cli.Titulo);
		$("#txtMensagem").val(cli.Mensagem);
	});

	$("#tblListar").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});
});