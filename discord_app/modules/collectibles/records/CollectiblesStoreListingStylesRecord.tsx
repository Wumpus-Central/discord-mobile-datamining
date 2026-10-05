// discord_app/modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import _modDef7063 from "../../../../_runtime/metro/07063__.js";
import Record from "../../../lib/Record.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CollectiblesStoreListingStylesRecord extends Record {
  constructor(arg0) {
    const tmp = new CollectiblesStoreListingStylesRecord(new.target, this);
    ({
      backgroundColors: tmp.backgroundColors,
      buttonColors: tmp.buttonColors,
      confettiColors: tmp.confettiColors,
    } = arg0);
    return tmp;
  }
  static fromServer(arg0) {
    let background_colors;
    let button_colors;
    let confetti_colors;
    let tmp;
    ({ background_colors, button_colors, confetti_colors } = arg0);
    const mapped = background_colors.map((item) => {
      const tmp = _modDef7063;
      const obj = utils_ColorUtils;
      return tmp(obj.int2hex(item));
    });
    const mapped1 = button_colors.map((item) => {
      const tmp = _modDef7063;
      const obj = utils_ColorUtils;
      return tmp(obj.int2hex(item));
    });
    if (typeof CollectiblesStoreListingStylesRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new CollectiblesStoreListingStylesRecord(
        tmp,
        confetti_colors,
        CollectiblesStoreListingStylesRecord,
        this,
      );
      tmp7.backgroundColors = mapped;
      tmp7.buttonColors = mapped1;
      tmp7.confettiColors = tmp5;
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingStylesRecord.tsx");

export default CollectiblesStoreListingStylesRecord;
