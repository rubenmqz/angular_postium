import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Post } from "../models/post";
import { PostService } from "./post.service";

@Injectable()
export class PostsResolve implements Resolve<Post[]> {

    constructor(private _postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

        /*-----------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                        |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a un usuario, llame a la función 'getUserPosts()' del servicio PostService. Recuerda    |
         | mirar en los parámetros de la ruta, a ver qué encuentras.                               |
         |-----------------------------------------------------------------------------------------*/

        if (route.url.length > 2) {
            if (route.url[1].path=='users') {
                return this._postService
                           .getUserPosts(Number(route.url[2]));
            }

            /*-----------------------------------------------------------------------------------------|
             | ~~~ Yellow Path ~~~                                                                     |
             |-----------------------------------------------------------------------------------------|
             | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
             | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
             | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
             |-----------------------------------------------------------------------------------------*/

            else if (route.url[1].path=='categories') {
                return this._postService
                            .getCategoryPosts(Number(route.url[2]));
            }
        }
        
        return this._postService.getPosts();
    }
}
