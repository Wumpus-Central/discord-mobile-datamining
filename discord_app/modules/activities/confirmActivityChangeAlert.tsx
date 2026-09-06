// discord_app/modules/activities/confirmActivityChangeAlert.tsx
import util from "../../intl/index.native.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let str = "";
  if (null != channel) {
    let obj = useChannelName;
    str = obj.computeChannelName(channel, UserStore, RelationshipStore);
  }
  obj = { title: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.XkIWkk);
  const intl2 = util.intl;
  obj.cancelText = intl2.string(util.t["ETE/oC"]);
  const intl3 = util.intl;
  obj.confirmText = intl3.string(util.t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  const intl4 = util.intl;
  name = undefined;
  if (name != null) {
    name = name.name;
  }
  if (name == null) {
    const intl5 = tmp6(1114).intl;
    name = intl5.string(tmp6(1114).t.G99XFs);
  }
  obj = { currentApplicationName: name, currentApplicationChannelName: null };
  const obj2 = AlertActionCreatorsDefault;
  if (tmp6Result.isNullOrEmpty(str)) {
    const intl6 = tmp6(1114).intl;
    str = intl6.string(tmp6(1114).t.OGUjmt);
  }
  obj.currentApplicationChannelName = str;
  obj.body = intl4.format(util.t["5/Xort"], obj);
  obj2.show(obj);
}
