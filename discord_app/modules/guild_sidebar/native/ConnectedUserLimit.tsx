// === Module 15107: ConnectedUserLimit ===

// Module 15107 (ConnectedUserLimit)
import "noop";
import { jsx } from "jsxProd";

const result = require("useChannelVideoLimit").fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(users) {
  let channel;
  let video;
  ({ channel, video } = users);
  const limit = importDefault(9023)(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let videoLimit = false;
  let total = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    total = bound;
    videoLimit = num < 0 || limit < num;
    const tmp4 = num < 0 || limit < num;
  }
  return jsx(importDefault(15108), { users: users.userCount, total, videoLimit });
};