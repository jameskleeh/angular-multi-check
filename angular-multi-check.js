    .directive('multiCheckGroup', function() {
        return {
            scope: {},
            controller: function($scope) {
                this.getElements = function() {
                    return $scope.element.find("[multi-check]").toArray();
                };
                this.lastChecked = null;
            },
            link: function(scope, element) {
                scope.element = element;
            }
        };
    })
    .directive('multiCheck', function() {
        return {
            require: ['^ngModel', '^multiCheckGroup'],
            restrict: 'A',
            link: function(scope, el, attrs, controllers) {
                var groupCtrl = controllers[1];

                el.bind('click', function(event) {
                    var last = groupCtrl.lastChecked;
                    if (last && event.shiftKey) {
                        var chkboxes = groupCtrl.getElements(),
                            start = chkboxes.indexOf(event.target),
                            end = chkboxes.indexOf(last),
                            checked = last.checked;

                        angular.forEach(chkboxes.slice(Math.min(start, end), Math.max(start, end) + 1), function(box) {
                            var model = angular.element(box).data('$ngModelController');
                            model.$setViewValue(checked);
                            model.$render();
                        });
                    }
                    groupCtrl.lastChecked = event.target;
                });

            }
        };
    });
