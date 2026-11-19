// discord_app/modules/soundboard/native/edit_modal/SoundboardSoundEditModal.tsx
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function close() {
  ModalActionCreatorsDefault.pop();
}
class SoundboardSoundEditModal {
  constructor(arg0) {
    closure_0 = global;
    ({ guildId, analyticsSource, localSource } = global);
    tmp = guildId(analyticsSource[7])(() => {
      if (null != noop) {
        const obj2 = { type: "Soundboard Upload Sound", guild_id, source };
        AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      }
    });
    items = [];
    items[0] = global;
    memo = localSource.useMemo(() => {
      const intl = util.intl;
      if (null != localSource.localSource) {
        let HmsZGS = util.t["ioD/9I"];
      } else {
        HmsZGS = util.t.HmsZGS;
      }
      let obj = {};
      const obj2 = {
        title: intl.string(HmsZGS),
        headerLeft: NavigatorHeader.getHeaderCloseButton(close),
        render() {
          const obj = {};
          const merged = Object.assign(closure_0);
          obj.onSaved = onSaved;
          return jsx(guild_id(source[6]), {});
        },
      };
      obj[constants.ROOT] = obj2;
      return obj;
    }, items);
    obj = { screens: memo, initialRouteName: closure_6.ROOT };
    return jsx(closure_0(analyticsSource[9]).Navigator, obj);
  }
}
const Constants = fn(1072);
({ AnalyticEvents: closure_4, ModalAnimation } = Constants);
const jsx = fn(21).jsx;
const timestampProducer = { ROOT: "ROOT" };
SoundboardSoundEditModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/SoundboardSoundEditModal.tsx");

export default SoundboardSoundEditModal;
