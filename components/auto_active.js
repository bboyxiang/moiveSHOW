/*(function (angular) {
    angular.module('moviecat.auto_active', [])

    .directive('autoActive', ['$location', function ($location) {
        return {
            link: function (scope, element, attributes) {
                // 监听$location.url()的额变化
                scope.$location = $location;
                scope.$watch('$location.url()', function (now, old) {
                    // 获取$location.url();
                    var url = $location.url();
                    // 取得a标签的href属性
                    var href = element.children().attr('href').substr(1);
                    // 当$localton.url()与href相当时添加active
                    if (now.startsWith(href)) {
                        // 去除父级中的active
                        element.parent().children().removeClass(attributes.autoActive);
                        element.addClass(attributes.autoActive);
                    }
                })
                

            }
        }
        
    }])
})(angular)*/

(function (angular) {
    angular.module('moviecat.auto_active', [])
    .directive('autoActive', ['$location', function ($location) {
        return {
            link: function (scope, element, attributes) {
                // 监听当前的url
                scope.$location = $location;
                scope.$watch('$location.url()', function (now, old) {
                    // 获取当前的href
                    var href = element.children().attr('href').substr(1);    
                    if (now.startsWith(href)) {
                        element.parent().children().removeClass(attributes.autoActive);
                        element.addClass(attributes.autoActive)
                    }
                })
                
            }
        }
    }])
})(angular)