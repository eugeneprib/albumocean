"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var albums_service_1 = require("../services/albums.service");
var BodyComponent = (function () {
    function BodyComponent(albumService) {
        var _this = this;
        this.albumService = albumService;
        this.albumService.getAlbums()
            .subscribe(function (res) {
            // console.log(res[0]._id)
            _this.albums = res;
        });
    }
    return BodyComponent;
}());
BodyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main-body',
        templateUrl: "body.component.html"
    }),
    __metadata("design:paramtypes", [albums_service_1.AlbumService])
], BodyComponent);
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=body.component.js.map