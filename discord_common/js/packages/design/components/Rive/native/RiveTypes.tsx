// === Module 4613: RiveTypes ===

// Module 4613 (RiveTypes)
import DataBindByName from "DataBindByName" /* 4561 */;
import size from "module_2" /* 2 */;

const obj = { fill: DataBindByName.Fit.Fill, contain: DataBindByName.Fit.Contain, cover: DataBindByName.Fit.Cover, "fit-width": DataBindByName.Fit.FitWidth, "fit-height": DataBindByName.Fit.FitHeight, none: DataBindByName.Fit.None, "scale-down": DataBindByName.Fit.ScaleDown, layout: DataBindByName.Fit.Layout };
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveTypes.tsx");

export const FIT_MAP = obj;
export const ALIGNMENT_MAP = { "top-left": DataBindByName.Alignment.TopLeft, "top-center": DataBindByName.Alignment.TopCenter, "top-right": DataBindByName.Alignment.TopRight, "center-left": DataBindByName.Alignment.CenterLeft, center: DataBindByName.Alignment.Center, "center-right": DataBindByName.Alignment.CenterRight, "bottom-left": DataBindByName.Alignment.BottomLeft, "bottom-center": DataBindByName.Alignment.BottomCenter, "bottom-right": DataBindByName.Alignment.BottomRight };