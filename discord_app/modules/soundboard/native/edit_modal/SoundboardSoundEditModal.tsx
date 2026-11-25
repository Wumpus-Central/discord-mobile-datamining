// === Module 19951: SoundboardSoundEditModal ===

// Module 19951 (SoundboardSoundEditModal)
import util from "util" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useMountEffectDefault from "useMountEffect" /* 5573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import NavigatorHeader from "NavigatorHeader" /* 7160 */;
import noop from "module_19" /* 19 */;

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
        }
      };
      obj[constants.ROOT] = obj2;
      return obj;
    }, items);
    obj = { screens: memo, initialRouteName: closure_6.ROOT };
    return jsx(closure_0(analyticsSource[9]).Navigator, obj);
  }
}
const Constants = fn(1071);
({ AnalyticEvents: closure_4, ModalAnimation } = Constants);
const jsx = fn(21).jsx;
const timestampProducer = { ROOT: "ROOT" };
SoundboardSoundEditModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/SoundboardSoundEditModal.tsx");

export default SoundboardSoundEditModal;