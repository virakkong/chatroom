(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
		
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as vm',
				templateUrl: '/templates/home.html'
		});

	}
	
	function BlocChatCookies($cookies, $uibModal) {
		if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/username_modal.html',
				controller: function($scope, $uibModalInstance) {
					$scope.newUsername = "Guest " + Math.floor(Math.random() * (100 - 1)) + 1;
					$scope.create = function() {
						$uibModalInstance.close($scope.newUsername);
					};
				},
				size: 'md'
			});
			
			modalInstance.result.then(function(data) {
				$cookies.put('blocChatCurrentUser', data);
			});
		}
	}
	
	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
		.config(config)
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();
