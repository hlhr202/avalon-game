import { makeAutoObservable } from "mobx";
import { Stage } from "../../../server/src/state/stage";
import type { RoomDTO } from "../../../server/src/room";
import type { PlayerDTO } from "../../../server/src/room/player";

class RoomStore {
    stage: Stage = Stage.WAITING;
    room: RoomDTO = {
        players: [],
        count: 0,
        id: null,
    };
    playerInfo: PlayerDTO | null = null;

    get canStartGame() {
        if (import.meta.env.DEV) return true;
        return this.room.count >= 6 && this.room.count <= 10;
    }

    get side() {
        return this.playerInfo?.role?.side;
    }

    get role() {
        return this.playerInfo?.role?.type;
    }

    constructor() {
        makeAutoObservable(this);
    }

    updateRoom(room: RoomDTO) {
        this.room = room;
    }

    updateStage(stage: Stage) {
        this.stage = stage;
    }

    updatePlayerInfo = (playerInfo: PlayerDTO | null) => {
        this.playerInfo = playerInfo;
    };
}

export const roomStore = new RoomStore();
