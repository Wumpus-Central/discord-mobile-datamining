// discord_app/modules/channel/useCreateChannelSubmit.tsx
import CreateChannelActionCreatorsDefault from "../../actions/CreateChannelActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5, permissionOverwrites;

let metroImportAll;
let metroImportDefault;
({ ChannelTypes: metroImportDefault, Permissions: metroImportAll } = Constants);
const CreateChannelMode = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const result = size.fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  let closure_2;
  let first;
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, importDefault] = tmp;
  [first, closure_2] = react.useState({});
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (permissionOverwrites) => {
    let applicationId;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let obj9;
    let tmp57;
    if (applicationId === 2) {
      applicationId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (permissionOverwrites === 1) {
        throw value;
      } else if (permissionOverwrites === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let type;
      try {
        let bitrate;
        let userLimit;
        let name;
        let body;
        let closure_10;
        let id;
        let guild_id;
        applicationId = 2;
        if (0 === c7) {
          if (permissionOverwrites === 1) {
            applicationId = 3;
            throw value;
          } else if (permissionOverwrites === 2) {
            applicationId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            permissionOverwrites = undefined;
            bitrate = undefined;
            userLimit = undefined;
            c3 = undefined;
            name = undefined;
            type = undefined;
            ({
              overwrites: c0,
              bitrate: c1,
              userLimit: c2,
              createMode: c3,
              guildId: c4,
              name: c5,
              channelType: c6,
              categoryId: c7,
              applicationId: c8,
            } = permissionOverwrites);
            body = undefined;
            closure_10 = undefined;
            id = undefined;
            guild_id = undefined;
            c7 = 1;
            applicationId = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (permissionOverwrites === 1) {
            applicationId = 3;
            throw value;
          } else if (permissionOverwrites === 2) {
            applicationId = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (c3 === constants3.PREMIUM_CHANNEL) {
              const obj5 = {
                id: tmp,
                type: permissionOverwrites(dependencyMap[4]).PermissionOverwriteType.ROLE,
                deny: constants2.VIEW_CHANNEL,
                allow: obj9.getFlag(0),
              };
              const push = permissionOverwrites.push;
              obj9 = closure_2_2(dependencyMap[5]);
              push(obj5);
            }
            bitrate(true);
            type = 2;
            const obj6 = {
              guildId: tmp,
              type,
              name,
              permissionOverwrites,
              bitrate,
              userLimit,
              parentId: tmp57,
              applicationId,
            };
            tmp57 = null;
            const createChannel = CreateChannelActionCreatorsDefault.createChannel;
            if (type !== constants.GUILD_CATEGORY) {
              tmp57 = c7;
            }
            c7 = 4;
            applicationId = 1;
            const obj7 = { value: createChannel(obj6), done: false };
            return obj7;
          }
        } else if (2 === c7) {
          type = 0;
          bitrate(false);
          throw closure_5;
        } else {
          let body2;
          if (3 === c7) {
            type = 1;
            body2 = closure_5;
            const AccessibilityAnnouncer = permissionOverwrites(dependencyMap[7]).AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = permissionOverwrites(dependencyMap[8]).intl;
            announce(intl.string(permissionOverwrites(dependencyMap[8]).t["0SbUzm"]));
            body = body2.body;
            let errors;
            const tmp28 = closure_2;
            if (body != null) {
              errors = body.errors;
            }
            bitrate = errors;
            if (errors == null) {
              bitrate = {};
            }
            tmp28(bitrate);
          } else if (permissionOverwrites === 1) {
            applicationId = 3;
            throw value;
          } else if (permissionOverwrites === 2) {
            type = 0;
            bitrate(false);
            applicationId = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            body = value;
            if (null != body) {
              body2 = body.body;
              closure_2 = body2;
              if (body2 == null) {
                closure_2 = {};
              }
              closure_10 = closure_2;
              id = closure_10.id;
              guild_id = closure_10.guild_id;
              if (null != id) {
                const AccessibilityAnnouncer2 = permissionOverwrites(dependencyMap[7]).AccessibilityAnnouncer;
                const announce2 = AccessibilityAnnouncer2.announce;
                const intl2 = permissionOverwrites(dependencyMap[8]).intl;
                const obj8 = { name };
                announce2(intl2.formatToPlainString(permissionOverwrites(dependencyMap[8]).t.Wke70b, obj8));
                if (permissionOverwrites != null) {
                  tmp82(id, guild_id);
                }
              }
            }
            type = 1;
          }
          type = 0;
          bitrate(false);
          applicationId = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp61) {
        closure_5 = tmp61;
        if (0 === type) {
          applicationId = 3;
          throw tmp61;
        } else if (1 === tmp63) {
          c7 = 2;
        } else {
          c7 = 3;
        }
      }
    }
  });
  const items = [arg0];
  const items1 = [
    tmp2,
    first,
    useCallback(function () {
      return closure_0(...arguments);
    }, items),
  ];
  return items1;
}
export { CreateChannelMode };
