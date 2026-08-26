// === Module 11973: CreateGuildContainer ===

// Module 11973 (CreateGuildContainer)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "comparator" /* 1982 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { UPLOAD_MEDIUM_SIZE } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
createCacheKey = { flex: { flex: 1 }, contentContainer: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/CreateGuildContainer.tsx");

export default function CreateGuildContainer(onCreate) {
  onCreate = onCreate.onCreate;
  const guildTemplate = onCreate.guildTemplate;
  let flag = onCreate.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  const onHubGuildInfoSet = onCreate.onHubGuildInfoSet;
  const isCommunityIntent = onCreate.isCommunityIntent;
  const merged = Object.assign(onCreate, Object.create(null));
  let first;
  let first1;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  let first2;
  let obj = guildTemplate(onHubGuildInfoSet[9]);
  const tmp3 = first(first1.useState(obj.getGuildNameSuggestion({ truncateUsername: true })), 2);
  first = tmp3[0];
  const tmp5 = first(first1.useState(null), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  const tmp2 = callback();
  [tmp8, c7] = first(first1.useState(false), 2);
  let tmp7 = first(first1.useState(false), 2);
  [tmp10, c8] = first(first1.useState(null), 2);
  const tmp11 = first(first1.useState(() => {
    const currentUser = _undefined.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }), 2);
  first2 = tmp11[0];
  callback = first1.useCallback(isCommunityIntent(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            let base64 = tmp2;
            base64 = undefined;
            obj1 = closure_1_1(table[10]);
            obj1 = { size: null };
            obj1[0] = closure_1_8;
            table = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj1.openImagePicker(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          base64 = arg1.base64;
          if (null != base64) {
            callback(base64);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  }), []);
  const items = [guildTemplate, first1, first, onCreate, onHubGuildInfoSet, first2, isCommunityIntent];
  const callback1 = first1.useCallback(isCommunityIntent(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp3;
            c0 = tmp7;
            c0 = undefined;
            c1 = undefined;
            let defaultChannel;
            c3 = undefined;
            closure_1_7(true);
            c3 = 1;
            if (null != closure_1_2) {
              tmp65(c4, c5, id);
              c3 = 0;
            } else {
              let obj9 = id(closure_1_2[11]);
              c4 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj9.createGuildFromTemplate(c4, c5, id, c3, closure_1_9);
              return obj1;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_8(defaultChannel);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const lib = arg1;
            id = lib.id;
            let obj6 = lib(closure_1_2[12]);
            c4 = 3;
            c5 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = obj6.waitForGuild(id);
            return obj3;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            defaultChannel = closure_1_6.getDefaultChannel(c1);
            c3 = lib(closure_1_2[13]).dangerouslyConstructGuildRecordFromUntypedObject(c0);
            const obj14 = lib(closure_1_2[13]);
            const obj5 = { omitUserIds: null, guild: null, channel: null };
            const _Set = Set;
            const set = new Set();
            obj5[0] = set;
            obj5[1] = c3;
            obj5[2] = defaultChannel;
            c4 = 4;
            c5 = 1;
            obj6 = { value: null, done: false };
            obj6[0] = lib(closure_1_2[14]).loadInviteSuggestions(obj5);
            return obj6;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            let tmp9Result;
            if (c0 != null) {
              const obj8 = { guild: null };
              obj8[0] = c3;
              tmp9Result = tmp9(obj8);
            }
            c4 = 5;
            c5 = 1;
            obj9 = { value: null, done: false };
            obj9[0] = tmp9Result;
            return obj9;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        tmp7 = closure_1_7(false);
        c5 = 3;
      } catch (tmp38) {
        defaultChannel = tmp38;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  obj = { top: true, left: true, right: true, style: items1, children: null };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp2);
  obj = {};
  const tmp9 = first(first1.useState(null), 2);
  const merged1 = Object.assign(merged);
  obj.guild = { name: first, icon: first1, staffOnly: first2 };
  obj.error = tmp10;
  obj.submitting = tmp8;
  obj.onIconPress = callback;
  obj.onNameChange = tmp3[1];
  obj.onStaffOnlyChange = tmp11[1];
  obj.onCreate = callback1;
  obj.autoFocus = flag;
  obj[4] = first2(guildTemplate(onHubGuildInfoSet[16]), obj);
  return first2(onCreate(onHubGuildInfoSet[15]).SafeAreaPaddingView, obj);
};