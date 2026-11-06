// === Module 9024: parseWaterwheelsCard ===

// Module 9024 (parseWaterwheelsCard)
import LoggerDefault from "Logger" /* 3 */;
import apply from "apply" /* 12 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 9025 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
function isRecord(arg0) {
  return apply.isPlainObject(arg0);
}
function isActionValid(value) {
  if (obj.isPlainObject(value.value)) {
    const type = value.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD !== type) {
      if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD !== type) {
        if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
          return typeof value.value.game_id === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
          return typeof value.value.provider === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
          return typeof value.value.url === "string";
        } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
          return "enable_notifications" === value.value.nudge;
        } else {
          return false;
        }
      }
    }
    return typeof value.value.guild_id === "string";
  } else {
    return false;
  }
  obj = apply;
}
function mapLayout(layout) {
  const type = layout.type;
  if ("server_row" === type) {
    ({ guild_id, icon_url, online, members } = layout);
    const obj4 = {};
    let merged = Object.assign(Object.assign(layout, Object.assign({ guild_id: 0, icon_url: 0, online: 0, members: 0 })));
    obj4.guildId = guild_id;
    obj4.iconUrl = icon_url;
    let _Number = Number;
    obj4.online = Number(online);
    let _Number2 = Number;
    obj4.members = Number(members);
    return obj4;
  } else if ("post" === type) {
    const obj5 = {};
    ({ image_url, action_label } = layout);
    let merged1 = Object.assign(_objectWithoutProperties(layout, closure_2));
    obj5.imageUrl = image_url;
    obj5.actionLabel = action_label;
    return obj5;
  } else if ("carousel" === type) {
    ({ header, items } = layout);
    let obj = {};
    const merged2 = Object.assign(_objectWithoutProperties(layout, closure_3));
    ({ title: obj2.title, subtitle: obj2.subtitle, icon_url: obj2.iconUrl } = header);
    obj.header = { title: null, subtitle: null, iconUrl: null };
    obj.items = items.map((server) => {
      server = server.server;
      ({ game_id, cover_url } = server);
      const obj = {};
      const merged = Object.assign(Object.assign(server, Object.assign({ game_id: 0, cover_url: 0, server: 0 })));
      obj.gameId = game_id;
      obj.coverUrl = cover_url;
      let tmp2 = null;
      if (null != server) {
        ({ guild_id, icon_url, online, members } = server);
        const obj3 = {};
        const merged1 = Object.assign(Object.assign(server, Object.assign({ guild_id: 0, icon_url: 0, online: 0, members: 0 })));
        obj3.guildId = guild_id;
        obj3.iconUrl = icon_url;
        const _Number = Number;
        obj3.online = Number(online);
        const _Number2 = Number;
        obj3.members = Number(members);
        tmp2 = obj3;
      }
      obj.server = tmp2;
      return obj;
    });
    return obj;
  }
}
function reject(reason) {
  logger.warn("Rejected Waterwheels card: " + reason);
  return { ok: false, reason };
}
let closure_2 = ["image_url", "action_label"];
let closure_3 = ["header", "items"];
let closure_5 = ["post", "carousel", "server_row"];
const logger = new LoggerDefault("WaterwheelsCardParser");
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/cards/parseWaterwheelsCard.tsx");

export function parseWaterwheelsCard(id) {
  try {
    if (isRecord(id)) {
      if (typeof id.id === "string") {
        if (typeof id.type === "string") {
          if (isRecord(id.layout)) {
            const _Array = Array;
            if (Array.isArray(id.actions)) {
              if (closure_5.includes(id.layout.type)) {
                const actions = id.actions;
                if (actions.every((type) => {
                  let isPlainObjectResult = apply.isPlainObject(type);
                  if (isPlainObjectResult) {
                    const _Object = Object;
                    const values = Object.values(WaterwheelsCardTypes.WaterwheelsActionType);
                    isPlainObjectResult = values.includes(type.type);
                  }
                  return isPlainObjectResult;
                })) {
                  if (undefined !== id.client_eligibility) {
                    if ("notifications_permission" !== id.client_eligibility) {
                      return reject("unknown_eligibility");
                    }
                  }
                  const actions2 = id.actions;
                  if (actions2.every(isActionValid)) {
                    const obj = { id: null, type: null, layout: null, actions: null, clientEligibility: null };
                    ({ id: obj.id, type: obj.type } = id);
                    obj.layout = mapLayout(id.layout);
                    ({ actions: obj.actions, client_eligibility } = id);
                    if (client_eligibility == null) {
                      client_eligibility = null;
                    }
                    const obj2 = { ok: true, card: null };
                    obj.clientEligibility = client_eligibility;
                    obj2.card = obj;
                    return obj2;
                  } else {
                    return reject("invalid_card");
                  }
                } else {
                  return reject("unknown_action");
                }
              } else {
                return reject("unknown_layout");
              }
            }
          }
        }
      }
    }
    return reject("invalid_card");
  } catch (err) {
    return reject("invalid_card");
  }
}