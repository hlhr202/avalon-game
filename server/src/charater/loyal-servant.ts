import type { Room } from "../room";
import type { PlayerDTO } from "../room/player";
import type { Character } from "./base";

export class LoyalServant implements Character {
    type = "LOYAL_SERVANT" as const;
    side = "JUSTICE" as const;
    name = "忠臣";

    constructor(private room: Room) {}

    get visible(): PlayerDTO[] {
        return [];
    }

    toJSON = () => {
        return {
            type: this.type,
            name: this.name,
            side: this.side,
            visible: this.visible,
        };
    };
}
