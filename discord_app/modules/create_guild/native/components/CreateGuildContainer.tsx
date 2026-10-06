// === Module 11975: CreateGuildContainer ===

// Module 11975 (CreateGuildContainer)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c4, c5, currentUser, set;

let obj2;
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, contentContainer: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildContainer.tsx");

export default function CreateGuildContainer(onCreate) {
  let c7;
  let c8;
  let items1;
  let obj2;
  let tmp11;
  let tmp17;
  let tmp9;
  onCreate = onCreate.onCreate;
  const guildTemplate = onCreate.guildTemplate;
  let flag = onCreate.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  let onHubGuildInfoSet = onCreate.onHubGuildInfoSet;
  const isCommunityIntent = onCreate.isCommunityIntent;
  const merged = Object.assign(onCreate, Object.assign({ onCreate: 0, guildTemplate: 0, autoFocus: 0, onHubGuildInfoSet: 0, isCommunityIntent: 0 }));
  let name;
  let first1;
  c7 = undefined;
  c8 = undefined;
  const useState = first1.useState;
  const tmp2 = closure_10();
  let obj = guildTemplate(onHubGuildInfoSet[9]);
  const tmp3 = name(useState(obj.getGuildNameSuggestion({ truncateUsername: true })), 2);
  name = tmp3[0];
  const tmp5 = tmp3[1];
  const tmp6 = name(first1.useState(null), 2);
  first1 = tmp6[0];
  let closure_6 = tmp6[1];
  [tmp9, c7] = name(first1.useState(false), 2);
  const tmp8 = name(first1.useState(false), 2);
  [tmp11, c8] = name(first1.useState(null), 2);
  const tmp10 = name(first1.useState(null), 2);
  const tmp12 = name(first1.useState(() => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }), 2);
  const first2 = tmp12[0];
  const tmp14 = tmp12[1];
  const callback = first1.useCallback(isCommunityIntent(function*() {
    let c2;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let base64;
        c3 = 2;
        if (0 === onHubGuildInfoSet) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            base64 = undefined;
            const obj5 = { size };
            const obj2 = tmp4(onHubGuildInfoSet[10]);
            onHubGuildInfoSet = 1;
            c3 = 1;
            const obj6 = { value: obj2.openImagePicker(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          base64 = value.base64;
          if (null != base64) {
            closure_129_6(base64);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  }), []);
  const items = [guildTemplate, first1, name, onCreate, onHubGuildInfoSet, first2, isCommunityIntent];
  const callback1 = first1.useCallback(isCommunityIntent(function*() {
    let closure_0;
    let closure_1;
    let obj7;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let channel;
      try {
        let id;
        let guild;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            onCreate = undefined;
            id = undefined;
            channel = undefined;
            guild = undefined;
            currentUser(true);
            c3 = 1;
            if (null != onHubGuildInfoSet) {
              tmp60(first, first1, guildTemplate);
              c3 = 0;
            } else {
              const obj10 = tmp(channel[11]);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: obj10.createGuildFromTemplate(first, first1, guildTemplate, isCommunityIntent, first2), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_8(channel);
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            onCreate = value;
            id = onCreate.id;
            c4 = 3;
            c5 = 1;
            const obj6 = { value: obj7.waitForGuild(id), done: false };
            obj7 = onCreate(channel[12]);
            return obj6;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            channel = defaultChannel.getDefaultChannel(id);
            const obj14 = onCreate(channel[13]);
            guild = obj14.dangerouslyConstructGuildRecordFromUntypedObject(onCreate);
            const obj9 = { omitUserIds: set, guild, channel };
            const _Set = Set;
            const self = this;
            const self2 = this;
            const loadInviteSuggestions = onCreate(channel[14]).loadInviteSuggestions;
            const tmp53 = onCreate(channel[14]);
            set = new Set();
            c4 = 4;
            c5 = 1;
            const obj11 = { value: loadInviteSuggestions(obj9), done: false };
            return obj11;
          }
        } else if (4 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            let tmp6Result;
            if (closure_129_0 != null) {
              const obj13 = { guild };
              tmp6Result = tmp6(obj13);
            }
            c4 = 5;
            c5 = 1;
            const obj15 = { value: tmp6Result, done: false };
            return obj15;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        closure_129_7(false);
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp36) {
        channel = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  const rect = { top: true, left: true, right: true, style: items1, children: first2(tmp17, obj2) };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp2);
  const SafeAreaPaddingView = onCreate(onHubGuildInfoSet[15]).SafeAreaPaddingView;
  obj2 = { guild: { name, icon: first1, staffOnly: first2 }, error: tmp11, submitting: tmp9, onIconPress: callback, onNameChange: tmp5, onStaffOnlyChange: tmp14, onCreate: callback1, autoFocus: flag };
  tmp17 = guildTemplate(onHubGuildInfoSet[16]);
  const merged1 = Object.assign(merged);
  return first2(SafeAreaPaddingView, rect);
};