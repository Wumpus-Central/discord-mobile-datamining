// === Module 9415: ElementType ===

// Module 9415 (ElementType)
ElementType.ElementType = undefined;
ElementType.isTag = undefined;
ElementType.Root = undefined;
ElementType.Text = undefined;
ElementType.Directive = undefined;
ElementType.Comment = undefined;
ElementType.Script = undefined;
ElementType.Style = undefined;
ElementType.Tag = undefined;
ElementType.CDATA = undefined;
ElementType.Doctype = undefined;
ElementType = ElementType.ElementType;
if (!ElementType) {
  const obj = {};
  ElementType.ElementType = obj;
  ElementType = obj;
}
ElementType.Root = "root";
ElementType.Text = "text";
ElementType.Directive = "directive";
ElementType.Comment = "comment";
ElementType.Script = "script";
ElementType.Style = "style";
ElementType.Tag = "tag";
ElementType.CDATA = "cdata";
ElementType.Doctype = "doctype";
ElementType.isTag = function isTag(type) {
  return type.type === ElementType.Tag || type.type === ElementType.Script || type.type === ElementType.Style;
};
({ Root: ElementType.Root, Text: ElementType.Text, Directive: ElementType.Directive, Comment: ElementType.Comment, Script: ElementType.Script, Style: ElementType.Style, Tag: ElementType.Tag, CDATA: ElementType.CDATA, Doctype: ElementType.Doctype } = ElementType);