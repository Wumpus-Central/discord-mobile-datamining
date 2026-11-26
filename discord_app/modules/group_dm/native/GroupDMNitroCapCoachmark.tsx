// discord_app/modules/group_dm/native/GroupDMNitroCapCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import _modDef10548 from "../../../../_runtime/metro/10548__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_6 = fn(12101).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const ContentDismissActionType = fn(4889).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapCoachmark.tsx");

export default function GroupDMNitroCapCoachmark(channelId) {
  channelId = channelId.channelId;
  const _location = channelId.location;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const ref = noop.useRef(null);
  const groupDMNitroAudience = channelId(12099).useGroupDMNitroAudience();
  const obj2 = channelId(12099);
  channelId(9561);
  if (obj3.useConfig({ location: _location }).enabled) {
    if ("entitled" === groupDMNitroAudience) {
      items = [tmp2(4876).DismissibleContent.NITRO_GDM_CAP_COACHMARK];
    }
    const tmp9 = _slicedToArray(tmp6([]), 2);
    dependencyMap = tmp10;
    const tmp11 = tmp9[0] === tmp2(4876).DismissibleContent.NITRO_GDM_CAP_COACHMARK;
    _slicedToArray = tmp11;
    const items1 = [tmp11, tmp9[1], channelId, _location];
    const memo = noop.useMemo(() => {
      const obj = {
        title: null,
        description: null,
        visible: null,
        position: "bottom",
        offsetY: 12,
        onDismiss: null,
        buttonLabel: null,
        buttonIcon: null,
        buttonVariant: "primary",
        onButtonPress: null,
      };
      const intl = util.intl;
      obj.title = intl.string(util.t.d8Spvj);
      const intl2 = util.intl;
      obj.description = intl2.formatToPlainString(util.t.U3CkDg, { number });
      obj.visible = visible;
      obj.onDismiss = function onDismiss() {
        return dependencyMap(constants.USER_DISMISS);
      };
      const intl3 = util.intl;
      obj.buttonLabel = intl3.string(util.t.yZOtoD);
      obj.buttonIcon = _modDef10548;
      obj.onButtonPress = function onButtonPress() {
        _location(12098)(channelId, closure_1_1);
        dependencyMap(constants.TAKE_ACTION);
      };
      return obj;
    }, items1);
    const coachmark = tmp2(9568).useCoachmark(ref, memo);
    const obj4 = { ref, collapsable: false, children: channelId.children };
    return (
      <View ref={ref} collapsable={false}>
        {channelId.children}
      </View>
    );
  }
  obj3 = _location(12102);
}
