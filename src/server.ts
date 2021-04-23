import { http } from "./http"
import "./Websocket/client";
import "./Websocket/admin"

http.listen(3333, () => console.log('server is running port : 3333'))