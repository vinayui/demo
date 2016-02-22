/**
 * Created by qxuser1 on 2/20/2016.
 */
var app = angular.module('enrollApp',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/account');
        $stateProvider
            /*.state('account',{
                url:'/account',
                templateUrl:'templates/AccountNumber.html'
            })
        .state('personal',{
            url:'/personal',
            templateUrl:'templates/Personal Details.html'
        })*/
    });


var FormStuff = {

    init: function() {
        this.applyConditionalRequired();
        this.bindUIActions();
    },

    bindUIActions: function() {
        $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
    },

    applyConditionalRequired: function() {

        $(".require-if-active").each(function() {
            var el = $(this);
            if ($(el.data("require-pair")).is(":checked")) {
                el.prop("required", true);
            } else {
                el.prop("required", false);
            }
        });

    }

};

FormStuff.init();