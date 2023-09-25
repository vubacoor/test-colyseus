import { Room, Client } from "@colyseus/core";
import { TestRoomState } from "../schema/TestRoomState";

export class TestRoom extends Room<TestRoomState> {
  maxClients = 4;

  onCreate (options: any) {
    this.setState(new TestRoomState());

    this.onMessage("test", (client, message) => {
      console.log("Test", message)
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    console.log(options)
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
