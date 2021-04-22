import { http } from "./http"
import "./Websocket/client";

http.listen(3333, () => console.log('server is running port : 3333'))