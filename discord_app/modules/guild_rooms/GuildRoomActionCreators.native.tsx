// === Module 4716: GuildRoomActionCreators ===

// Module 4716 (GuildRoomActionCreators)
import _guildRoomConnectAll from "_guildRoomConnect" /* 4717 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _guildRoomConnect(arg0) {
  await _guildRoomConnectAll.guildRoomConnect(closure_0, closure_1, closure_2, closure_3);
  if (1 === tmp6) {
    c7 = 0;
    c4 = 3;
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c7 = 0;
  }
  return value;
};
let closure_4 = async function _guildRoomUpdate(arg0) {
  await _guildRoomConnectAll.guildRoomUpdate(closure_0, closure_1, closure_2);
  if (1 === tmp6) {
    c6 = 0;
    c3 = 3;
  } else if (arg0 === 1) {
    c3 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c6 = 0;
  }
  return value;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.native.tsx");
for (const key10024 in require("_guildRoomConnect")) {
  arg5[key10024] = require("_guildRoomConnect")[key10024];
  continue;
}

export const guildRoomConnect = function guildRoomConnect() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const guildRoomUpdate = function guildRoomUpdate() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};