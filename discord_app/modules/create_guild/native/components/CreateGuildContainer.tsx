// discord_app/modules/create_guild/native/components/CreateGuildContainer.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { flex: { flex: 1 }, contentContainer: { marginTop: fn(5987).NAV_BAR_HEIGHT } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildContainer.tsx");

export default function CreateGuildContainer(onCreate) {
  onCreate = onCreate.onCreate;
  const guildTemplate = onCreate.guildTemplate;
  let flag = onCreate.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  let onHubGuildInfoSet = onCreate.onHubGuildInfoSet;
  const isCommunityIntent = onCreate.isCommunityIntent;
  const merged = Object.assign(
    onCreate,
    Object.assign({ onCreate: 0, guildTemplate: 0, autoFocus: 0, onHubGuildInfoSet: 0, isCommunityIntent: 0 }),
  );
  let name;
  let first1;
  c7 = undefined;
  c8 = undefined;
  const tmp2 = closure_10();
  const tmp3 = name(
    first1.useState(guildTemplate(onHubGuildInfoSet[9]).getGuildNameSuggestion({ truncateUsername: true })),
    2,
  );
  name = tmp3[0];
  const tmp5 = name(first1.useState(null), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  let obj = guildTemplate(onHubGuildInfoSet[9]);
  [tmp8, c7] = name(first1.useState(false), 2);
  let tmp7 = name(first1.useState(false), 2);
  [tmp10, c8] = name(first1.useState(null), 2);
  const tmp11 = name(
    first1.useState(() => {
      const currentUser = _undefined.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }),
    2,
  );
  const first2 = tmp11[0];
  const callback = first1.useCallback(
    isCommunityIntent(function* () {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              closure_0 = tmp2;
              let base64;
              const obj5 = { size };
              onHubGuildInfoSet = 1;
              c3 = 1;
              const obj6 = { value: tmp5(onHubGuildInfoSet[10]).openImagePicker(obj5), done: false };
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    }),
    [],
  );
  const items = [guildTemplate, first1, name, onCreate, onHubGuildInfoSet, first2, isCommunityIntent];
  const callback1 = first1.useCallback(
    isCommunityIntent(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              onCreate = tmp7;
              closure_128_0 = undefined;
              let id;
              let defaultChannel2;
              closure_128_3 = undefined;
              _undefined(true);
              c3 = 1;
              if (null != onHubGuildInfoSet) {
                tmp64(first, first1, guildTemplate);
                c3 = 0;
              } else {
                const obj10 = tmp3(tmp38[11]);
                c4 = 2;
                c5 = 1;
                const obj4 = {
                  value: obj10.createGuildFromTemplate(first, first1, guildTemplate, isCommunityIntent, first2),
                  done: false,
                };
                return obj4;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_129_8(tmp38);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_128_0 = value;
              id = closure_128_0.id;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: onCreate(tmp38[12]).waitForGuild(id), done: false };
              return obj6;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              defaultChannel2 = defaultChannel.getDefaultChannel(id);
              closure_128_3 = onCreate(tmp38[13]).dangerouslyConstructGuildRecordFromUntypedObject(closure_128_0);
              const obj14 = onCreate(tmp38[13]);
              const obj9 = { omitUserIds: null, guild: null, channel: null };
              const _Set = Set;
              const set = new Set();
              obj9.omitUserIds = set;
              obj9.guild = closure_128_3;
              obj9.channel = defaultChannel2;
              c4 = 4;
              c5 = 1;
              const obj11 = { value: onCreate(tmp38[14]).loadInviteSuggestions(obj9), done: false };
              return obj11;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              let tmp9Result;
              if (closure_129_0 != null) {
                const obj13 = { guild: closure_128_3 };
                tmp9Result = tmp9(obj13);
              }
              c4 = 5;
              c5 = 1;
              const obj16 = { value: tmp9Result, done: false };
              return obj16;
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
          tmp7 = closure_129_7(false);
          c5 = 3;
        } catch (tmp38) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp38;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
  const rect = { top: true, left: true, right: true, style: null, children: null };
  const items1 = [,];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp2);
  rect.style = items1;
  let obj2 = {};
  const tmp9 = name(first1.useState(null), 2);
  const merged1 = Object.assign(merged);
  obj2.guild = { name, icon: first1, staffOnly: first2 };
  obj2.error = tmp10;
  obj2.submitting = tmp8;
  obj2.onIconPress = callback;
  obj2.onNameChange = tmp3[1];
  obj2.onStaffOnlyChange = tmp11[1];
  obj2.onCreate = callback1;
  obj2.autoFocus = flag;
  rect.children = first2(guildTemplate(onHubGuildInfoSet[16]), obj2);
  return first2(onCreate(onHubGuildInfoSet[15]).SafeAreaPaddingView, rect);
}
