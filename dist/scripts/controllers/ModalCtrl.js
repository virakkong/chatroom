//(function() {
//	function ModalCtrl($uibModal) {
//		this.newChatRoom = function() {
//			
//			var modalInstance = $uibModal.open({
//				templateUrl: '/templates/modal.html',
//				controller: function ($scope, $uibModalInstance) {
//					$scope.cancel = function() {
//						Modal.dismiss('Cancel');
//					};
//		
//					$scope.create = function() {
//						Modal.close();
//					};
//				},
//				size: 'sm'	
//			});
//		}	
//		
//	}
//	
//
//	angular
//		.module('blocChat')
//		.controller('ModalCtrl', ['$uibModal', ModalCtrl]);
//})();