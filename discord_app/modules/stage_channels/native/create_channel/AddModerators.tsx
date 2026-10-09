// discord_app/modules/stage_channels/native/create_channel/AddModerators.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["guildId", "onChannelCreated"];
const View = fn(17).View;
const RowType = fn(7489).RowType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  addMembersContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  moderatorDescriptionContainer: { margin: 16 },
  errorMessage: { margin: 16, marginBottom: 0 },
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AddModerators(guildId) {
      const cResult = require("c").c(33);
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
        let tmp5 = onChannelCreated;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        importDefault = cResult[3];
      }
      const tmp10 = closure_12();
      let obj = require("c");
      navigation = require("useNavigation").useNavigation();
      if (cResult[4] !== tmp4) {
        guild = GuildStore.getGuild(tmp4);
        cResult[4] = tmp4;
        cResult[5] = guild;
        let tmp12 = guild;
      } else {
        tmp12 = cResult[5];
      }
      require("../../../../../_runtime/metro/00038__.js")(null != tmp12, "Guild must not be null");
      [first, , cResult[8]] = require("useCreateChannelSubmit")(tmp5);
      _slicedToArray = tmp21;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {};
        cResult[6] = obj2;
        let tmp22 = obj2;
      } else {
        tmp22 = cResult[6];
      }
      const obj4 = noop;
      const tmp15 = importDefault;
      const tmpResult = require("useNavigation");
      first1 = _slicedToArray(noop.useState(tmp22), 2)[0];
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp21) {
          if (cResult[9] === first1) {
            if (cResult[10] === tmp6) {
              let tmp26 = cResult[11];
            }
            noop = tmp26;
            if (cResult[12] === tmp26) {
              if (cResult[13] === navigation) {
                if (cResult[14] === first1) {
                  if (cResult[15] === first) {
                    let tmp27 = cResult[16];
                    let tmp28 = cResult[17];
                  }
                  const layoutEffect = obj4.useLayoutEffect(tmp27, tmp28);
                  const _Symbol = Symbol;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
                    let intl = tmp(tmp2[16]).intl;
                    obj3.children = intl.string(tmp(tmp2[16]).t.f7VbhF);
                    const tmp32 = closure_10(tmp(tmp2[19]).Text, obj3);
                    cResult[18] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[18];
                  }
                  if (cResult[19] !== tmp10.moderatorDescriptionContainer) {
                    const obj5 = { style: tmp10.moderatorDescriptionContainer, children: tmp30 };
                    const tmp36 = closure_10(View, obj5);
                    cResult[19] = tmp10.moderatorDescriptionContainer;
                    cResult[20] = tmp36;
                    let tmp33 = tmp36;
                  } else {
                    tmp33 = cResult[20];
                  }
                  if (cResult[21] === tmp20.message) {
                    if (cResult[22] === tmp10.errorMessage) {
                      let tmp37 = cResult[23];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl2 = tmp(tmp2[16]).intl;
                      let stringResult = intl2.string(tmp(tmp2[16]).t["Ch6+n4"]);
                      cResult[24] = stringResult;
                      let tmp41 = stringResult;
                    } else {
                      tmp41 = cResult[24];
                    }
                    if (cResult[25] === tmp12) {
                      if (cResult[26] === first1) {
                        let tmp43 = cResult[27];
                      }
                      if (cResult[28] === tmp10.addMembersContainer) {
                        if (cResult[29] === tmp43) {
                          if (cResult[30] === tmp33) {
                            if (cResult[31] === tmp37) {
                              let tmp47 = cResult[32];
                            }
                            return tmp47;
                          }
                        }
                      }
                      const obj6 = { style: tmp10.addMembersContainer, children: null };
                      let items = [tmp33, tmp37, tmp43];
                      obj6.children = items;
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
                      permission: tmp(tmp2[22]).MODERATE_STAGE_CHANNEL_PERMISSIONS,
                      inputDesc: tmp41,
                      pendingAdditions: first1,
                      setPendingAdditions: tmp25,
                    };
                    const tmp46 = closure_10(tmp15(tmp2[21]), obj7);
                    cResult[25] = tmp12;
                    cResult[26] = first1;
                    cResult[27] = tmp46;
                    tmp43 = tmp46;
                    const tmp15Result = tmp15(tmp2[21]);
                  }
                  let tmp38 = null;
                  if (null != tmp20.message) {
                    const obj8 = { style: tmp10.errorMessage, children: null };
                    const obj9 = { messageType: tmp(tmp2[20]).HelpMessageTypes.ERROR, children: tmp20.message };
                    obj8.children = closure_10(tmp(tmp2[20]).HelpMessage, obj9);
                    tmp38 = closure_10(View, obj8);
                  }
                  cResult[21] = tmp20.message;
                  cResult[22] = tmp10.errorMessage;
                  cResult[23] = tmp38;
                  tmp37 = tmp38;
                }
              }
            }
            const fn = function j() {
              if (Object.keys(first1).length > 0) {
                const intl2 = guildId(navigation[16]).intl;
                let stringResult = intl2.string(guildId(navigation[16]).t.CumH4u);
              } else {
                const intl = guildId(navigation[16]).intl;
                stringResult = intl.string(guildId(navigation[16]).t["5Wxrcd"]);
              }
              guildId = stringResult;
              navigation.setOptions({
                headerRight: first
                  ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
                  : () => collapsed(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress }),
              });
              const obj = {
                headerRight: first
                  ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
                  : () => collapsed(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress }),
              };
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
          values = Object.values(closure_5);
          found = values.filter((row) => null != row.row.id);
          mapped = found.map((row) => {
            row = row.row;
            if (row.rowType === constants.ROLE) {
              let moderatorOverwrite = guildId(5890).createModeratorOverwrite(
                row.id,
                guildId(1998).PermissionOverwriteType.ROLE,
              );
              const obj2 = guildId(5890);
            } else {
              moderatorOverwrite = guildId(5890).createModeratorOverwrite(
                row.id,
                guildId(1998).PermissionOverwriteType.MEMBER,
              );
              const obj = guildId(5890);
            }
            return moderatorOverwrite;
          });
          obj = {};
          tmp2 = closure_4;
          merged = Object.assign(closure_1);
          obj.guildId = closure_0;
          items = [...mapped];
          overwrites = closure_1.overwrites;
          if (overwrites == null) {
            overwrites = [];
          }
          arraySpreadResult = HermesBuiltin.arraySpread(overwrites, tmp4);
          obj.overwrites = items;
          return tmp2(obj);
        }
      }
      cResult[7] = tmp4;
      cResult[9] = first1;
      cResult[10] = tmp6;
      cResult[11] = I;
      tmp26 = I;
      const tmp17Result = _slicedToArray(noop.useState(tmp22), 2);
    }
  : function AddModerators(guildId) {
      guildId = guildId.guildId;
      let tmp = null;
      let merged = Object.assign(guildId, Object.assign({ guildId: 0, onChannelCreated: 0 }));
      let navigation;
      _slicedToArray = undefined;
      first1 = undefined;
      let onPress;
      const tmp3 = closure_12();
      navigation = guildId(navigation[11]).useNavigation();
      guild = GuildStore.getGuild(guildId);
      merged(navigation[12])(null != guild, "Guild must not be null");
      const tmp10 = _slicedToArray(merged(navigation[13])(guildId.onChannelCreated), 3);
      const first = tmp10[0];
      _slicedToArray = tmp13;
      [first1, obj7.setPendingAdditions] = onPress.useState({});
      let items = [tmp10[2], first1, merged, guildId];
      onPress = onPress.useCallback(() => {
        const values = Object.values(first1);
        const found = values.filter((row) => null != row.row.id);
        const mapped = found.map((row) => {
          row = row.row;
          if (row.rowType === constants.ROLE) {
            let moderatorOverwrite = guildId(5890).createModeratorOverwrite(
              row.id,
              guildId(1998).PermissionOverwriteType.ROLE,
            );
            const obj2 = guildId(5890);
          } else {
            moderatorOverwrite = guildId(5890).createModeratorOverwrite(
              row.id,
              guildId(1998).PermissionOverwriteType.MEMBER,
            );
            const obj = guildId(5890);
          }
          return moderatorOverwrite;
        });
        let obj = {};
        merged = Object.assign(merged);
        obj.guildId = guildId;
        const items = [...mapped];
        let overwrites = merged.overwrites;
        if (overwrites == null) {
          overwrites = [];
        }
        HermesBuiltin.arraySpread(overwrites, tmp4);
        obj.overwrites = items;
        return closure_4(obj);
      }, items);
      const items1 = [onPress, navigation, first1, first];
      const layoutEffect = onPress.useLayoutEffect(() => {
        if (Object.keys(first1).length > 0) {
          const intl2 = guildId(navigation[16]).intl;
          let stringResult = intl2.string(guildId(navigation[16]).t.CumH4u);
        } else {
          const intl = guildId(navigation[16]).intl;
          stringResult = intl.string(guildId(navigation[16]).t["5Wxrcd"]);
        }
        guildId = stringResult;
        navigation.setOptions({
          headerRight: first
            ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
            : () => collapsed(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress }),
        });
        const obj = {
          headerRight: first
            ? () => closure_1_10(stringResult(navigation[17]).HeaderSubmittingIndicator, {})
            : () => collapsed(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress }),
        };
      }, items1);
      let obj2 = { style: tmp3.addMembersContainer, children: null };
      const obj3 = { style: tmp3.moderatorDescriptionContainer, children: null };
      const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
      let intl = guildId(navigation[16]).intl;
      obj4.children = intl.string(guildId(navigation[16]).t.f7VbhF);
      obj3.children = closure_10(guildId(navigation[19]).Text, obj4);
      const items2 = [closure_10(View, obj3), ,];
      if (null != tmp10[1].message) {
        const obj5 = { style: tmp3.errorMessage, children: null };
        const obj6 = { messageType: tmp4(tmp5[20]).HelpMessageTypes.ERROR, children: tmp12.message };
        obj5.children = closure_10(tmp4(tmp5[20]).HelpMessage, obj6);
        tmp = closure_10(View, obj5);
      }
      items2[1] = tmp;
      const obj7 = {
        channel: null,
        guild,
        permission: null,
        inputDesc: null,
        pendingAdditions: null,
        setPendingAdditions: null,
      };
      let obj = guildId(navigation[11]);
      obj7.permission = guildId(navigation[22]).MODERATE_STAGE_CHANNEL_PERMISSIONS;
      let intl2 = tmp4(tmp5[16]).intl;
      obj7.inputDesc = intl2.string(guildId(navigation[16]).t["Ch6+n4"]);
      obj7.pendingAdditions = first1;
      items2[2] = closure_10(merged(navigation[21]), obj7);
      obj2.children = items2;
      return closure_11(View, obj2);
    };
