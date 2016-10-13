(function() {
	function Room($firebaseArray) {
		var firebaseRef = new Firebase('https://bloc-chat-37714.firebaseio.com');
		//on firebase, add new item and value on Database section
		//rooms: https://console.firebase.google.com/project/bloc-chat-37714/database/data/
		var roomRef = $firebaseArray(firebaseRef.child('rooms'));
		
		var rooms = {
			getRooms: getRooms,
			addRoom: addRoom,
			getMessages: getMessages
		};
		
		return rooms;
		
		function getRooms() {
			return {
				all: roomRef
			}
		}
		
		function addRoom(name) {
			roomRef.$add(name);
		}
		
		function getMessages(roomId) {
			return $firebaseArray(firebaseRef.child('messages').orderByChild("roomID").equalTo(roomId));
		}

	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
