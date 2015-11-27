angular.module("listaTelefonica").factory("contatosAPI", function($http){
	var _getContatos = function(){
		return $http.get("http://localhost:80/lista/contatos.txt");
	};	
	
	var _saveContato = function(contato){
		return $http.post("http://localhost:80/lista/contatos.txt",contato);
	};	
		
	return {
		getContatos : _getContatos,
		saveContato: _saveContato
	};
});