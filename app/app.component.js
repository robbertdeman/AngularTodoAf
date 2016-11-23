System.register(['angular2/core', "angular2/src/common/directives/ng_for", "angular2/src/common/directives/ng_if"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng_for_1, ng_if_1;
    var TodoItem, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng_for_1_1) {
                ng_for_1 = ng_for_1_1;
            },
            function (ng_if_1_1) {
                ng_if_1 = ng_if_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(text, completed) {
                    this.text = text;
                    this.completed = completed;
                }
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
            AppComponent = (function () {
                function AppComponent() {
                    this.todos = new Array();
                }
                AppComponent.prototype.setCompleted = function (item, checked) {
                    item.completed = checked;
                };
                AppComponent.prototype.removeTodo = function (item) {
                    this.todos.splice(this.todos.indexOf(item), 1);
                };
                AppComponent.prototype.doneTyping = function ($event) {
                    if ($event.which === 13) {
                        this.addTodo($event.target);
                    }
                };
                AppComponent.prototype.addTodo = function (input) {
                    this.todos.push(new TodoItem(input.value, false));
                    input.value = '';
                };
                AppComponent.prototype.completeAll = function () {
                    for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                        var todo = _a[_i];
                        this.setCompleted(todo, true);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                    }),
                    core_1.View({
                        templateUrl: './app/app.html',
                        directives: [ng_for_1.NgFor, ng_if_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map