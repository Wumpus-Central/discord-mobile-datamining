// discord_app/modules/group_dm/native/GroupDMNitroCapCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import NitroWheelIcon2 from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import AssetRegistryDefault from "../../../../_runtime/09728_AssetRegistry.js";
import openGroupDMAddMembersDefault from "openGroupDMAddMembers.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import GroupDMConstants from "../GroupDMConstants.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ nitroWheelIcon: { width: 16, height: 16 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let channelId;
      let children;
      let closure_2;
      let closure_3;
      let closure_4;
      let items;
      const obj = channelId(576);
      const cResult = obj.c(34);
      ({ children, channelId } = location);
      const _location = location.location;
      const tmp4 = closure_9();
      react.useRef(null);
      const obj2 = channelId(11226);
      const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
      dependencyMap = tmp7;
      if (cResult[0] === groupDMNitroAudience) {
        let tmp8;
        let tmp11;
        let tmp13;
        if (cResult[1] === _location) {
          tmp8 = cResult[2];
        }
        const tmp10 = _location(11233)(tmp8);
        _slicedToArray = tmp10;
        if (cResult[3] !== _location) {
          const obj3 = { location: _location };
          cResult[3] = _location;
          cResult[4] = obj3;
          tmp11 = obj3;
        } else {
          tmp11 = cResult[4];
        }
        const tmp9Result = _location(11229);
        const enabled = tmp9Result.useConfig(tmp11).enabled;
        if (cResult[5] === enabled) {
          let tmp30;
          if ((cResult[6] === "staff") === groupDMNitroAudience) {
            tmp13 = cResult[7];
          }
          const tmpResult = channelId(6901);
          const tmp15 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp13), 2);
          react = tmp17;
          const first = tmp15[0];
          const _Symbol = Symbol;
          const NITRO_GDM_CAP_COACHMARK = channelId(2036).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = channelId(1126).intl;
            const stringResult = intl.string(channelId(1126).t.d8Spvj);
            const intl2 = channelId(1126).intl;
            const obj4 = { number };
            cResult[8] = stringResult;
            cResult[9] = intl2.formatToPlainString(channelId(1126).t.U3CkDg, obj4);
            const formatToPlainStringResult = intl2.formatToPlainString(channelId(1126).t.U3CkDg, obj4);
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor() {
                const TextBadge = channelId(closure_2[15]).TextBadge;
                const intl = channelId(closure_2[14]).intl;
                return (
                  <TextBadge
                    text={intl.string(channelId(closure_2[14]).t.oW0eUd)}
                    color={channelId(closure_2[15]).BadgeColors.EXPRESSIVE}
                  />
                );
              }
            }
            cResult[10] = G;
          } else {
            class G {
              constructor() {
                const TextBadge = channelId(closure_2[15]).TextBadge;
                const intl = channelId(closure_2[14]).intl;
                return (
                  <TextBadge
                    text={intl.string(channelId(closure_2[14]).t.oW0eUd)}
                    color={channelId(closure_2[15]).BadgeColors.EXPRESSIVE}
                  />
                );
              }
            }
          }
          if (cResult[11] !== tmp15[1]) {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
            cResult[11] = tmp15[1];
            cResult[12] = P;
          } else {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if (cResult[13] !== groupDMNitroAudience) {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
            const string = tmp27.string;
            const tmpResult2 = channelId(11226);
            cResult[13] = groupDMNitroAudience;
            cResult[14] = string(tmpResult2.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
            const stringResult1 = string(tmpResult2.getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
          } else {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          if ((cResult[15] === "entitled") === groupDMNitroAudience) {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
            if ("entitled" === groupDMNitroAudience) {
              class P {
                constructor() {
                  return closure_4(ContentDismissActionType.USER_DISMISS);
                }
              }
            }
            if (cResult[18] === channelId) {
              class P {
                constructor() {
                  return closure_4(ContentDismissActionType.USER_DISMISS);
                }
              }
            }
            const fn = function k() {
              if (closure_2) {
                openGroupDMAddMembersDefault(channelId, _location);
              } else {
                closure_3();
              }
              closure_4(ContentDismissActionType.TAKE_ACTION);
            };
            cResult[18] = channelId;
            cResult[19] = tmp10;
            cResult[20] = "entitled" === groupDMNitroAudience;
            cResult[21] = _location;
            cResult[22] = tmp15[1];
            cResult[23] = fn;
          }
          if ("entitled" === groupDMNitroAudience) {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
          } else {
            class P {
              constructor() {
                return closure_4(ContentDismissActionType.USER_DISMISS);
              }
            }
            const NitroWheelIcon = channelId(8346).NitroWheelIcon;
            tmp30 = (
              <NitroWheelIcon size="custom" style={tmp4.nitroWheelIcon} color={_location(587).unsafe_rawColors.WHITE} />
            );
          }
          cResult[15] = "entitled" === groupDMNitroAudience;
          cResult[16] = tmp4;
          cResult[17] = tmp30;
        }
        if (enabled) {
          class P {
            constructor() {
              return closure_4(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[5] = enabled;
          cResult[6] = "staff" === groupDMNitroAudience;
          cResult[7] = items;
          tmp13 = items;
        }
        items = [];
      }
      const obj6 = {
        audience: groupDMNitroAudience,
        location: _location,
        acquisitionStrategy: channelId(11226).GroupDMNitroAcquisitionStrategy.MARKETING,
      };
      cResult[0] = groupDMNitroAudience;
      cResult[1] = _location;
      cResult[2] = obj6;
      tmp8 = obj6;
    }
  : (channelId) => {
      let closure_4;
      let nitroWheelIcon;
      channelId = channelId.channelId;
      const _location = channelId.location;
      react = undefined;
      number = undefined;
      let visible;
      const children = channelId.children;
      const tmp = closure_9();
      dependencyMap = tmp;
      let obj = react;
      const ref = react.useRef(null);
      let obj2 = channelId(11226);
      const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
      react = tmp6;
      let obj3 = {
        audience: groupDMNitroAudience,
        location: _location,
        acquisitionStrategy: channelId(11226).GroupDMNitroAcquisitionStrategy.MARKETING,
      };
      let tmp7 = _location(11233);
      const tmp7Result = tmp7(obj3);
      let closure_5 = tmp7Result;
      const obj4 = _location(11229);
      const enabled = obj4.useConfig({ location: _location }).enabled;
      channelId(6901);
      if (enabled) {
        let str = "staff";
        if ("staff" !== groupDMNitroAudience) {
          const items = [tmp3(2036).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
        }
        const tmp13 = groupDMNitroAudience(tmp10([]), 2);
        number = tmp14;
        const tmp15 = tmp13[0] === channelId(2036).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
        visible = tmp15;
        const items1 = [
          groupDMNitroAudience,
          "entitled" === groupDMNitroAudience,
          tmp15,
          tmp13[1],
          channelId,
          _location,
          tmp,
          tmp7Result,
        ];
        const memo = obj.useMemo(() => {
          let intl;
          let intl2;
          let obj2;
          let obj3;
          let str;
          let string;
          let tmp7;
          let obj = {
            title: intl.string(intl4.t.d8Spvj),
            description: intl2.formatToPlainString(intl4.t.U3CkDg, obj2),
            visible,
            position: "bottom",
            offsetY: 12,
            renderImgComponent() {
              let intl;
              const obj = {
                text: intl.string(channelId(nitroWheelIcon[14]).t.oW0eUd),
                color: channelId(nitroWheelIcon[15]).BadgeColors.EXPRESSIVE,
              };
              const TextBadge = channelId(nitroWheelIcon[15]).TextBadge;
              intl = channelId(nitroWheelIcon[14]).intl;
              return closure_1_8(TextBadge, obj);
            },
            onDismiss() {
              return number(constants.USER_DISMISS);
            },
            buttonLabel: string(obj3.getGroupDMNitroCapCTAMessage(groupDMNitroAudience)),
            buttonIcon: tmp7,
            buttonVariant: str,
            buttonShiny: !closure_4,
            onButtonPress() {
              if (closure_1_4) {
                _location(nitroWheelIcon[19])(channelId, closure_1_1);
              } else {
                closure_1_5();
              }
              number(constants.TAKE_ACTION);
            },
          };
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj2 = { number };
          const intl3 = intl4.intl;
          string = intl3.string;
          obj3 = GroupDMNitroUpsellModel;
          if (closure_4) {
            tmp7 = AssetRegistryDefault;
          } else {
            const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
            tmp7 = (
              <NitroWheelIcon
                size="custom"
                style={nitroWheelIcon.nitroWheelIcon}
                color={nativeDefault.unsafe_rawColors.WHITE}
              />
            );
          }
          str = "experimental_premium-primary";
          if (closure_4) {
            str = "primary";
          }
          return obj;
        }, items1);
        const tmp3Result = channelId(9895);
        const coachmark = tmp3Result.useCoachmark(ref, memo);
        return (
          <closure_5 ref={ref} collapsable={false}>
            {children}
          </closure_5>
        );
      }
    };
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default tmp2;
