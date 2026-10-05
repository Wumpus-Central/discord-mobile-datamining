// discord_app/modules/stage_channels/native/create_channel/AddModerators.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import ChannelPermissionsConstants from "../../../channel_permissions/ChannelPermissionsConstants.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId, importDefault, navigation, row;

let c10;
let obj2;
let unpackModuleId;
let closure_3 = ["guildId", "onChannelCreated"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = {
  addMembersContainer: obj2,
  moderatorDescriptionContainer: { margin: 16 },
  errorMessage: { margin: 16, marginBottom: 0 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let closure_12 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let HelpMessage;
      let _require;
      let closure_4;
      let closure_6;
      let first;
      let first1;
      let intl;
      let items;
      let obj9;
      let tmp12;
      let tmp22;
      let tmp5;
      let obj = require("react");
      const cResult = obj.c(33);
      if (cResult[0] !== guildId) {
        guildId = guildId.guildId;
        _require = guildId;
        const onChannelCreated = guildId.onChannelCreated;
        const tmp9 = first1(guildId, first);
        importDefault = tmp9;
        cResult[0] = guildId;
        cResult[1] = guildId;
        cResult[2] = onChannelCreated;
        cResult[3] = tmp9;
        tmp5 = onChannelCreated;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        importDefault = cResult[3];
      }
      const tmp10 = closure_12();
      const tmpResult = require("useNavigation");
      navigation = tmpResult.useNavigation();
      if (cResult[4] !== tmp4) {
        const guild = GuildStore.getGuild(tmp4);
        cResult[4] = tmp4;
        cResult[5] = guild;
        tmp12 = guild;
      } else {
        tmp12 = cResult[5];
      }
      require("../../../../../_runtime/metro/00038__.js")(null != tmp12, "Guild must not be null");
      const tmp18 = _slicedToArray(require("useCreateChannelSubmit")(tmp5), 3);
      first = tmp18[0];
      _slicedToArray = tmp21;
      const tmp15 = importDefault;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[6] = obj2;
        tmp22 = obj2;
      } else {
        tmp22 = cResult[6];
      }
      first1 = tmp17(react.useState(tmp22), 2)[0];
      _slicedToArray(react.useState(tmp22), 2);
      const obj4 = react;
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp18[2]) {
          if (cResult[9] === first1) {
            let tmp26;
            if (cResult[10] === tmp6) {
              tmp26 = cResult[11];
            }
            react = tmp26;
            if (cResult[12] === tmp26) {
              if (cResult[13] === navigation) {
                if (cResult[14] === first1) {
                  let tmp27;
                  let tmp28;
                  let tmp30;
                  let tmp33;
                  if (cResult[15] === first) {
                    tmp27 = cResult[16];
                    tmp28 = cResult[17];
                  }
                  const layoutEffect = obj4.useLayoutEffect(tmp27, tmp28);
                  const _Symbol = Symbol;
                  const addMembersContainer = tmp10.addMembersContainer;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj3 = {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: intl.string(require("intl").t.f7VbhF),
                    };
                    const Text = tmp(tmp2[19]).Text;
                    intl = tmp(tmp2[16]).intl;
                    const tmp32 = closure_10(Text, obj3);
                    cResult[18] = tmp32;
                    tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[18];
                  }
                  if (cResult[19] !== tmp10.moderatorDescriptionContainer) {
                    const obj5 = { style: tmp10.moderatorDescriptionContainer, children: tmp30 };
                    const tmp36 = closure_10(View, obj5);
                    cResult[19] = tmp10.moderatorDescriptionContainer;
                    cResult[20] = tmp36;
                    tmp33 = tmp36;
                  } else {
                    tmp33 = cResult[20];
                  }
                  if (cResult[21] === tmp18[1].message) {
                    let tmp37;
                    let tmp41;
                    if (cResult[22] === tmp10.errorMessage) {
                      tmp37 = cResult[23];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl2 = tmp(tmp2[16]).intl;
                      let stringResult = intl2.string(tmp(tmp2[16]).t["Ch6+n4"]);
                      cResult[24] = stringResult;
                      tmp41 = stringResult;
                    } else {
                      tmp41 = cResult[24];
                    }
                    if (cResult[25] === tmp12) {
                      let tmp43;
                      if (cResult[26] === first1) {
                        tmp43 = cResult[27];
                      }
                      if (cResult[28] === tmp10.addMembersContainer) {
                        if (cResult[29] === tmp43) {
                          if (cResult[30] === tmp33) {
                            let tmp47;
                            if (cResult[31] === tmp37) {
                              tmp47 = cResult[32];
                            }
                            return tmp47;
                          }
                        }
                      }
                      const obj6 = { style: addMembersContainer, children: items };
                      items = [tmp33, tmp37, tmp43];
                      const tmp50 = closure_11(View, obj6);
                      cResult[28] = tmp10.addMembersContainer;
                      cResult[29] = tmp43;
                      cResult[30] = tmp33;
                      cResult[31] = tmp37;
                      cResult[32] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj7 = {
                      channel: null,
                      guild: tmp12,
                      permission: require("StageChannelPermissions").MODERATE_STAGE_CHANNEL_PERMISSIONS,
                      inputDesc: tmp41,
                      pendingAdditions: first1,
                      setPendingAdditions: tmp25,
                    };
                    const tmp15Result = tmp15(navigation[21]);
                    const tmp46 = closure_10(tmp15Result, obj7);
                    cResult[25] = tmp12;
                    cResult[26] = first1;
                    cResult[27] = tmp46;
                    tmp43 = tmp46;
                  }
                  let tmp38 = null;
                  if (null != tmp18[1].message) {
                    const obj8 = { style: tmp10.errorMessage, children: closure_10(HelpMessage, obj9) };
                    obj9 = { messageType: require("native").HelpMessageTypes.ERROR, children: tmp18[1].message };
                    HelpMessage = tmp(tmp2[20]).HelpMessage;
                    tmp38 = closure_10(View, obj8);
                  }
                  cResult[21] = tmp18[1].message;
                  cResult[22] = tmp10.errorMessage;
                  cResult[23] = tmp38;
                  tmp37 = tmp38;
                }
              }
            }
            const fn = function j() {
              let onPress;
              let stringResult;
              if (Object.keys(first1).length > 0) {
                const intl2 = guildId(navigation[16]).intl;
                stringResult = intl2.string(guildId(navigation[16]).t.CumH4u);
              } else {
                const intl = guildId(navigation[16]).intl;
                stringResult = intl.string(guildId(navigation[16]).t["5Wxrcd"]);
              }
              guildId = stringResult;
              let obj = {
                headerRight: first
                  ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
                  : () => {
                      const obj = { text: stringResult, onPress };
                      return authStore(HeaderActionButton.HeaderActionButton, obj);
                    },
              };
              navigation.setOptions(obj);
            };
            const items1 = [tmp26, navigation, first1, first];
            cResult[12] = tmp26;
            cResult[13] = navigation;
            cResult[14] = first1;
            cResult[15] = first;
            cResult[16] = fn;
            cResult[17] = items1;
            tmp28 = items1;
            tmp27 = fn;
          }
        }
      }
      class I {
        constructor() {
          let items;
          const values = Object.values(first1);
          const found = values.filter((row) => null != row.row.id);
          const mapped = found.map((row) => {
            let moderatorOverwrite;
            row = row.row;
            if (row.rowType === constants.ROLE) {
              const obj2 = guildId(navigation[14]);
              moderatorOverwrite = obj2.createModeratorOverwrite(
                row.id,
                guildId(navigation[15]).PermissionOverwriteType.ROLE,
              );
            } else {
              const obj = guildId(navigation[14]);
              moderatorOverwrite = obj.createModeratorOverwrite(
                row.id,
                guildId(navigation[15]).PermissionOverwriteType.MEMBER,
              );
            }
            return moderatorOverwrite;
          });
          let obj = { guildId, overwrites: items };
          const merged = Object.assign(overwrites);
          items = [...mapped];
          overwrites = overwrites.overwrites;
          if (overwrites == null) {
            overwrites = [];
          }
          HermesBuiltin.arraySpread(items, overwrites, tmp5);
          return closure_4(obj);
        }
      }
      cResult[7] = tmp4;
      cResult[8] = tmp18[2];
      cResult[9] = first1;
      cResult[10] = tmp6;
      cResult[11] = I;
      tmp26 = I;
    }
  : (guildId) => {
      let HelpMessage;
      let Text;
      let closure_4;
      let first1;
      let intl;
      let intl2;
      let items2;
      let obj4;
      let obj6;
      let tmp16;
      guildId = guildId.guildId;
      let tmp = null;
      const onChannelCreated = guildId.onChannelCreated;
      let merged = Object.assign(guildId, Object.assign({ guildId: 0, onChannelCreated: 0 }));
      navigation = undefined;
      _slicedToArray = undefined;
      first1 = undefined;
      let onPress;
      const tmp3 = closure_12();
      const tmp5 = navigation;
      let obj = guildId(navigation[11]);
      navigation = obj.useNavigation();
      const guild = GuildStore.getGuild(guildId);
      merged(navigation[12])(null != guild, "Guild must not be null");
      const tmp10 = _slicedToArray(merged(navigation[13])(onChannelCreated), 3);
      const first = tmp10[0];
      _slicedToArray = tmp13;
      [first1, tmp16] = onPress.useState({});
      let items = [tmp10[2], first1, merged, guildId];
      onPress = onPress.useCallback(() => {
        let items;
        const values = Object.values(first1);
        const found = values.filter((row) => null != row.row.id);
        const mapped = found.map((row) => {
          let moderatorOverwrite;
          row = row.row;
          if (row.rowType === constants.ROLE) {
            const obj2 = guildId(navigation[14]);
            moderatorOverwrite = obj2.createModeratorOverwrite(
              row.id,
              guildId(navigation[15]).PermissionOverwriteType.ROLE,
            );
          } else {
            const obj = guildId(navigation[14]);
            moderatorOverwrite = obj.createModeratorOverwrite(
              row.id,
              guildId(navigation[15]).PermissionOverwriteType.MEMBER,
            );
          }
          return moderatorOverwrite;
        });
        let obj = { guildId, overwrites: items };
        merged = Object.assign(merged);
        items = [...mapped];
        let overwrites = merged.overwrites;
        if (overwrites == null) {
          overwrites = [];
        }
        HermesBuiltin.arraySpread(items, overwrites, tmp5);
        return closure_4(obj);
      }, items);
      const items1 = [onPress, navigation, first1, first];
      const layoutEffect = onPress.useLayoutEffect(() => {
        let stringResult;
        if (Object.keys(first1).length > 0) {
          const intl2 = guildId(navigation[16]).intl;
          stringResult = intl2.string(guildId(navigation[16]).t.CumH4u);
        } else {
          const intl = guildId(navigation[16]).intl;
          stringResult = intl.string(guildId(navigation[16]).t["5Wxrcd"]);
        }
        guildId = stringResult;
        let obj = {
          headerRight: first
            ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
            : () => {
                const obj = { text: stringResult, onPress };
                return authStore(HeaderActionButton.HeaderActionButton, obj);
              },
        };
        navigation.setOptions(obj);
      }, items1);
      let obj2 = { style: tmp3.addMembersContainer, children: items2 };
      const obj3 = { style: tmp3.moderatorDescriptionContainer, children: closure_10(Text, obj4) };
      obj4 = {
        variant: "text-sm/medium",
        color: "text-default",
        children: intl.string(guildId(navigation[16]).t.f7VbhF),
      };
      Text = guildId(navigation[19]).Text;
      intl = guildId(navigation[16]).intl;
      items2 = [closure_10(View, obj3), ,];
      const tmp8 = merged;
      if (null != tmp10[1].message) {
        const obj5 = { style: tmp3.errorMessage, children: closure_10(HelpMessage, obj6) };
        obj6 = { messageType: guildId(tmp5[20]).HelpMessageTypes.ERROR, children: tmp10[1].message };
        HelpMessage = tmp4(tmp5[20]).HelpMessage;
        tmp = closure_10(View, obj5);
      }
      items2[1] = tmp;
      const obj7 = {
        channel: null,
        guild,
        permission: guildId(tmp5[22]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
        inputDesc: intl2.string(guildId(tmp5[16]).t["Ch6+n4"]),
        pendingAdditions: first1,
        setPendingAdditions: tmp16,
      };
      const tmp8Result = tmp8(tmp5[21]);
      intl2 = tmp4(tmp5[16]).intl;
      items2[2] = closure_10(tmp8Result, obj7);
      return closure_11(View, obj2);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default tmp3;
