// discord_app/modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import InteractionComponentTypes from "../../InteractionComponentTypes.tsx";
import SelectComponentActionSheetDefault from "SelectComponentActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, flattenedGuildIds, obj1, tmp10, tmp11, tmp6, tmp9, user, value1;

let c9;
let metroImportAll;
const f117014 = (arg0, arg1) => {
  guild = guild.getGuild(arg1);
  if (null != guild) {
    const obj = { type: closure_1_0(guildIdentity[9]).SelectOptionType.GUILD, value: null, label: null, guild };
    const push = arg0.push;
    ({ id: obj.value, name: obj.label } = guild);
    push(obj);
  }
  return arg0;
};
const f117015 = (record) => {
  record = record.record;
  const obj = {
    type: closure_1_0(guildIdentity[9]).SelectOptionType.GUILD,
    value: record.id,
    label: record.name,
    guild: record,
  };
  return obj;
};
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  guildIdentity: { flexDirection: "row", alignItems: "center" },
  iconContainer: { marginRight: 16 },
  avatar: { marginRight: 4 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let closure_4;
      let first;
      let guildIdentity;
      let intl;
      let onSelectGuild;
      let selectedGuild;
      let tmp17;
      let tmp7;
      let tmp8;
      let obj = onSelectGuild(576);
      const cResult = obj.c(28);
      ({ selectedGuild, onSelectGuild } = user);
      user = user.user;
      const tmp4 = closure_10();
      dependencyMap = tmp4;
      let obj2 = react;
      [tmp7, r10022] = first(react.useState(""), 2);
      first(react.useState(""), 2);
      const tmp5 = first;
      if (cResult[0] !== selectedGuild) {
        const obj4 = {
          type: onSelectGuild(5122).SelectOptionType.GUILD,
          value: null,
          label: null,
          guild: selectedGuild,
        };
        ({ id: obj3.value, name: obj3.label } = selectedGuild);
        cResult[0] = selectedGuild;
        cResult[1] = obj4;
        tmp8 = obj4;
      } else {
        tmp8 = cResult[1];
      }
      const tmp5Result = tmp5(obj2.useState(tmp8), 2);
      first = tmp5Result[0];
      react = tmp5Result[1];
      if (cResult[2] !== first) {
        let items1;
        if (null != first) {
          let items = [first];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[2] = first;
        cResult[3] = items1;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { maxValues: 1, minValues: 1, placeholder: intl.string(onSelectGuild(1126).t["ZImm/x"]) };
        intl = onSelectGuild(1126).intl;
        cResult[4] = obj6;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(arg0) {
            if (0 === user.length) {
              tmp4 = closure_1_7;
              flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
              tmp5 = globalThis;
              _Array = Array;
              self = this;
              self2 = this;
              reduce = flattenedGuildIds.reduce;
              array = new Array();
              tmp7 = array;
              reduced = reduce(() => {
                /* body not rendered: F117014 */
              }, array);
            } else {
              tmp = user;
              tmp2 = closure_2;
              obj = user(closure_2[17]);
              obj1 = { query: null };
              obj1.query = user;
              queryGuildsResult = obj.queryGuilds(obj1);
              reduced = queryGuildsResult.map(() => {
                /* body not rendered: F117015 */
              });
            }
            return reduced;
          }
        }
        cResult[5] = D;
      } else {
        class D {
          constructor(arg0) {
            if (0 === user.length) {
              tmp4 = closure_1_7;
              flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
              tmp5 = globalThis;
              _Array = Array;
              self = this;
              self2 = this;
              reduce = flattenedGuildIds.reduce;
              array = new Array();
              tmp7 = array;
              reduced = reduce(() => {
                /* body not rendered: F117014 */
              }, array);
            } else {
              tmp = user;
              tmp2 = closure_2;
              obj = user(closure_2[17]);
              obj1 = { query: null };
              obj1.query = user;
              queryGuildsResult = obj.queryGuilds(obj1);
              reduced = queryGuildsResult.map(() => {
                /* body not rendered: F117015 */
              });
            }
            return reduced;
          }
        }
      }
      if (cResult[6] !== tmp7) {
        class D {
          constructor(arg0) {
            if (0 === user.length) {
              tmp4 = closure_1_7;
              flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
              tmp5 = globalThis;
              _Array = Array;
              self = this;
              self2 = this;
              reduce = flattenedGuildIds.reduce;
              array = new Array();
              tmp7 = array;
              reduced = reduce(() => {
                /* body not rendered: F117014 */
              }, array);
            } else {
              tmp = user;
              tmp2 = closure_2;
              obj = user(closure_2[17]);
              obj1 = { query: null };
              obj1.query = user;
              queryGuildsResult = obj.queryGuilds(obj1);
              reduced = queryGuildsResult.map(() => {
                /* body not rendered: F117015 */
              });
            }
            return reduced;
          }
        }
        cResult[6] = tmp7;
        cResult[7] = tmp16;
      } else {
        class D {
          constructor(arg0) {
            if (0 === user.length) {
              tmp4 = closure_1_7;
              flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
              tmp5 = globalThis;
              _Array = Array;
              self = this;
              self2 = this;
              reduce = flattenedGuildIds.reduce;
              array = new Array();
              tmp7 = array;
              reduced = reduce(() => {
                /* body not rendered: F117014 */
              }, array);
            } else {
              tmp = user;
              tmp2 = closure_2;
              obj = user(closure_2[17]);
              obj1 = { query: null };
              obj1.query = user;
              queryGuildsResult = obj.queryGuilds(obj1);
              reduced = queryGuildsResult.map(() => {
                /* body not rendered: F117015 */
              });
            }
            return reduced;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            obj = user(closure_2[11]);
            return obj.hideActionSheet();
          }
        }
        cResult[8] = V;
        tmp17 = V;
      } else {
        class V {
          constructor() {
            obj = user(closure_2[11]);
            return obj.hideActionSheet();
          }
        }
      }
      V = tmp17;
      if (cResult[9] !== onSelectGuild) {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
        cResult[9] = onSelectGuild;
        cResult[10] = M;
      } else {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
        cResult[11] = tmp20;
      } else {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
      }
      const tmp21 = cResult[12];
      if (first != null) {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
      }
      if (tmp21 !== undefined) {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
        if (first != null) {
          class M {
            constructor(arg0, arg1) {
              tmp = onSelectGuild(arg1.guild);
              tmp2 = closure_4(arg1);
              tmp3 = closure_5();
              return;
            }
          }
        }
        class P {
          constructor(arg0) {
            value1 = undefined;
            value = user.value;
            if (closure_3 != null) {
              value1 = closure_3.value;
            }
            return value === value1;
          }
        }
        cResult[12] = tmp23;
        cResult[13] = P;
      } else {
        class M {
          constructor(arg0, arg1) {
            tmp = onSelectGuild(arg1.guild);
            tmp2 = closure_4(arg1);
            tmp3 = closure_5();
            return;
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return user.label;
          }
        }
        class P {
          constructor(arg0) {
            value1 = undefined;
            value = user.value;
            if (closure_3 != null) {
              value1 = closure_3.value;
            }
            return value === value1;
          }
        }
      } else {
        class H {
          constructor(arg0) {
            return user.label;
          }
        }
      }
      if (cResult[15] === tmp4.avatar) {
        class H {
          constructor(arg0) {
            return user.label;
          }
        }
      }
      class Q {
        constructor(arg0) {
          tmp = user;
          hasAvatarForGuildResult = user.hasAvatarForGuild(user.guild.id);
          tmp3 = closure_2;
          obj = closure_1(closure_2[12]);
          username = obj.getNickname(user.guild.id, undefined, user);
          if (!hasAvatarForGuildResult) {
            tmp4 = null;
            if (null == username) {
              return;
            }
          }
          obj1 = { style: closure_2.guildIdentity, children: null };
          tmp8 = hasAvatarForGuildResult;
          tmp5 = jsxs;
          tmp6 = View;
          if (hasAvatarForGuildResult) {
            tmp9 = jsx;
            tmp10 = closure_0;
            obj4 = { size: null, style: null, user: null, guildId: null, animate: true };
            Avatar = closure_0(tmp3[13]).Avatar;
            obj4.size = closure_0(tmp3[13]).AvatarSizes.SIZE_16;
            obj4.style = tmp7.avatar;
            obj4.user = tmp;
            obj4.guildId = user.guild.id;
            tmp8 = jsx(Avatar, obj4);
          }
          items = [,];
          items[0] = tmp8;
          tmp11 = jsx;
          Text = closure_0(tmp3[14]).Text;
          if (username == null) {
            username = tmp.username;
          }
          items[1] = tmp11(Text, { variant: "text-sm/medium", color: "text-default", children: username });
          obj1.children = items;
          return tmp5(tmp6, obj1);
        }
      }
      cResult[15] = tmp4.avatar;
      cResult[16] = tmp4.guildIdentity;
      cResult[17] = user;
      cResult[18] = Q;
    }
  : (arg0) => {
      let guildIdentity;
      let intl;
      let items1;
      let require;
      let selectedGuild;
      ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
      let first;
      let first1;
      let callback;
      let tmp = closure_10();
      dependencyMap = tmp;
      let obj = first1;
      const tmp2 = first(first1.useState(""), 2);
      first = tmp2[0];
      let obj2 = {
        type: InteractionComponentTypes.SelectOptionType.GUILD,
        value: selectedGuild.id,
        label: selectedGuild.name,
        guild: selectedGuild,
      };
      const tmp4 = tmp2[1];
      const tmp7 = first(first1.useState(obj2), 2);
      first1 = tmp7[0];
      let closure_5 = tmp7[1];
      if (null != first1) {
        let items = [first1];
        items1 = items;
      } else {
        items1 = [];
      }
      let obj3 = { maxValues: 1, minValues: 1, placeholder: intl.string(intl2.t["ZImm/x"]) };
      function submitSelection() {
        const obj = require("ActionSheetActionCreators");
        return obj.hideActionSheet();
      }
      intl = intl2.intl;
      callback = obj.useCallback(function (query) {
        let reduced;
        if (0 === query.length) {
          flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
          const _Array = Array;
          const self = this;
          const self2 = this;
          const reduce = flattenedGuildIds.reduce;
          const array = new Array();
          reduced = reduce(f117014, array);
        } else {
          let obj = require("AutocompleteUtils");
          const obj2 = { query };
          const queryGuildsResult = obj.queryGuilds(obj2);
          reduced = queryGuildsResult.map(f117015);
        }
        return reduced;
      }, []);
      const items2 = [first, callback];
      const memo = obj.useMemo(() => callback(first), items2);
      const obj4 = {
        onPressOptionItem(arg0, guild) {
          _require(guild.guild);
          closure_5(guild);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
        onRemoveOptionItem() {
          closure_5(null);
        },
        renderIcon(guild) {
          const obj = { guild: guild.guild };
          return closure_1_8(require("GuildIcon"), obj);
        },
        renderHeaderIcon(guild) {
          const obj = { size: require("GuildIcon").GuildIconSizes.XSMALL, guild: guild.guild };
          const tmp = require("GuildIcon");
          return closure_1_8(tmp, obj);
        },
        iconContainerStyle: tmp.iconContainer,
        renderDescription(guild) {
          let items;
          const hasAvatarForGuildResult = importDefault.hasAvatarForGuild(guild.guild.id);
          const obj = NicknameUtilsDefault;
          let username = obj.getNickname(guild.guild.id, undefined, importDefault);
          let tmp8 = hasAvatarForGuildResult;
          const obj2 = { style: guildIdentity.guildIdentity, children: items };
          if (tmp8) {
            const obj3 = {
              size: native.AvatarSizes.SIZE_16,
              style: tmp7.avatar,
              user: importDefault,
              guildId: guild.guild.id,
              animate: true,
            };
            const Avatar = native.Avatar;
            tmp8 = metroImportAll(Avatar, obj3);
          }
          items = [tmp8];
          const Text = Text_Text.Text;
          if (username == null) {
            username = importDefault.username;
          }
          items[1] = metroImportAll(Text, { variant: "text-sm/medium", color: "text-default", children: username });
          return React4(View, obj2);
        },
        selectionActionComponent: obj3,
        options: memo,
        selectedCount: items1.length,
        selectedOptions: items1,
        isSelected(value) {
          let value2;
          value = value.value;
          if (first1 != null) {
            value2 = first1.value;
          }
          return value === value2;
        },
        submitSelection,
        onQueryChange: tmp4,
        itemAccessibilityLabel(label) {
          return label.label;
        },
        allowEmpty: false,
        expanded: true,
      };
      return closure_8(SelectComponentActionSheetDefault, obj4);
    };
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx",
);

export default tmp3;
