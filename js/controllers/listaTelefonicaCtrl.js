angular.module("listaTelefonica", ["ngMessages"]).controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	var carregarContatos = function () {
		$http.get("contatos.txt").success(function (data, status) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};
	carregarContatos();
	var carregarOperadoras = function () {
		$http.get("operadoras.txt").success(function (data, status) {
			$scope.operadoras = data;
		});
	}
	carregarOperadoras();
	$scope.adicionarContato = function (contato) {
		//$scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
		//$scope.contatos.push(contato);
		contato.data = new Date();
		$http.post("contatos.txt", contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
			//$scope.contatos.push(angular.copy(contato));										
		});
	};
	$scope.classe = "selecionado";
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
});
