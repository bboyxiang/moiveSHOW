/* 
 * @Author: Marte
 * @Date:   2016-04-04 20:10:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-04-04 20:41:26
 */

(function(angular) {
    angular.module('moviecat.services.http', [])
        .service('HttpService', ['$window', function($window) {
            this.jsonp = function(url, params, fn) {

                var cbName = 'jsonp_' + (Math.random() * Math.random()).toString().substr(2);
                $window[cbName] = function(data) {
                    fn(data);
                    $window.document.body.removeChild(scriptElement);
                }

                var queryString = '';
                for (var key in params) {
                    queryString +=  key + '=' + params[key] + '&';
                }

                queryString += 'callback=' + cbName;

                url = url + '?' +queryString;

                var scriptElement = $window.document.createElement('script');
                scriptElement.src = url;

                $window.document.body.appendChild(scriptElement);
            }
        }])
})(angular)
