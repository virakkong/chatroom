(function() {
	function HomeCtrl(Room, Message, $uibModal){
		var vm = this;
		vm.chatRooms = Room.getRooms().all;
        vm.selectRoom = function(room) {
			vm.selectedRoom = room;
			vm.messages = Room.getMessages(vm.selectedRoom.$id);
		}
		
		vm.sendMessage = function() {
			Message.send(vm.newMessage, vm.selectedRoom.$id);
			vm.newMessage = '';
		} 
		
		vm.openModal = function() {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.newRoom = {name: ''};
					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close($scope.newRoom);
					};
				},
				size: 'md',
			});
			
			modalInstance.result.then(function(data) {
				Room.addRoom(data);
			});
		};
	};
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();