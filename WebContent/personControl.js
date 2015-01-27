<script>
function personControl($scope){
	$scope.firstName = "Titli",
	$scope.lastName = "Roy",
	$scope.fullName = function() {
		return $scope.firstName +" "+$scope.lastName;
	}
	$scope.names = [
	                 {name:'Jani',country:'Norway'},
	                 {name:'Hege',country:'Sweden'},
	                 {name:'Kai',country:'Denmark'},
	                 {name:'Jani',country:'Norway'},
	                 {name:'Hege',country:'Sweden'},
	                 {name:'Kaikai',country:'Denmark'},
	                 {name:'Janijal',country:'Norway'},
	                 {name:'Hegegege',country:'Sweden'},
	                 {name:'Kaikkk',country:'Denmark'}
	             ];
}
</script>