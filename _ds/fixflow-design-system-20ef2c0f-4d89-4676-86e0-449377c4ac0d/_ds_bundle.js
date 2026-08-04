/* @ds-bundle: {"format":4,"namespace":"FixFlowDesignSystem_20ef2c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"AvatarStack","sourcePath":"components/content/AvatarStack.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CheckItem","sourcePath":"components/content/CheckItem.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"285e0806a721","components/actions/IconButton.jsx":"7c0f4e927274","components/brand/Icon.jsx":"4e7cade5f6cd","components/brand/Logo.jsx":"2f5d8bd89664","components/content/AvatarStack.jsx":"d6091e974db0","components/content/Badge.jsx":"287029f0bddb","components/content/Card.jsx":"538b95d40249","components/content/CheckItem.jsx":"894fce6d2ac5","components/content/Eyebrow.jsx":"ba4dad3c8ac4","components/content/SectionHeading.jsx":"0e1779f4fe47","components/content/ServiceCard.jsx":"22e148e0102f","components/content/Stat.jsx":"43c8a9a4ed79","components/forms/Input.jsx":"2b9901329f4a","components/forms/Textarea.jsx":"62bda87d4e56","components/navigation/NavLink.jsx":"1f4b74486baf","components/navigation/Tabs.jsx":"17e04d698902","ui_kits/website/Chrome.jsx":"8ea5aafc4fe9","ui_kits/website/ContactScreen.jsx":"a1ffd7d94397","ui_kits/website/HomeScreen.jsx":"5d56255c433f","ui_kits/website/ServicesScreen.jsx":"df129f48be1f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FixFlowDesignSystem_20ef2c = window.FixFlowDesignSystem_20ef2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* Lucide (CDN) stands in for FixFlow's icon set — see readme.md > Iconography. */
function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 36,
    padding: "0 18px",
    fontSize: 13
  },
  md: {
    height: 44,
    padding: "0 24px",
    fontSize: "var(--type-button-size)"
  },
  lg: {
    height: 52,
    padding: "0 30px",
    fontSize: 15
  }
};
const variants = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--white)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "transparent",
    color: "var(--white)",
    border: "1px solid var(--action-secondary-border)"
  },
  outline: {
    background: "transparent",
    color: "var(--navy-900)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--orange-600)",
    border: "1px solid transparent"
  }
};

/** Pill CTA. Primary = solid orange; secondary = hairline outline over photography. */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-medium)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      whiteSpace: "nowrap",
      transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      ...v,
      ...s,
      ...(hover && !disabled && variant === "primary" ? {
        background: "var(--action-primary-bg-hover)"
      } : null),
      ...(hover && !disabled && variant === "secondary" ? {
        background: "rgba(255,255,255,.12)",
        borderColor: "var(--white)"
      } : null),
      ...(hover && !disabled && variant === "outline" ? {
        borderColor: "var(--orange-500)",
        color: "var(--orange-600)"
      } : null),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    background: "var(--orange-500)",
    color: "var(--white)"
  },
  navy: {
    background: "var(--navy-800)",
    color: "var(--white)"
  },
  glass: {
    background: "rgba(255,255,255,.16)",
    color: "var(--white)",
    backdropFilter: "var(--blur-glass)"
  },
  subtle: {
    background: "var(--slate-100)",
    color: "var(--navy-900)"
  }
};

/** Circular single-glyph action. */
function IconButton({
  icon,
  tone = "accent",
  size = 40,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "var(--transition-base)",
      filter: hover ? "brightness(.94)" : "none",
      ...(tones[tone] || tones.accent),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FixFlow ships no vector logo in the provided source — the wordmark is set in type.
   See readme.md > Logo. */
function Logo({
  tone = "dark",
  size = 22,
  style,
  ...rest
}) {
  const fg = tone === "light" ? "var(--white)" : "var(--navy-900)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: size,
      letterSpacing: "-0.02em",
      color: fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size * 1.05,
      height: size * 1.05,
      borderRadius: "var(--radius-sm)",
      background: "var(--orange-500)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      fontSize: size * 0.6,
      fontWeight: "var(--fw-bold)"
    }
  }, "F"), "FixFlow");
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/AvatarStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Overlapping customer faces + a count — the hero's social-proof capsule. */
function AvatarStack({
  images = [],
  count = "130K +",
  label = "Customer Review",
  tone = "glass",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "8px 20px 8px 10px",
      borderRadius: "var(--radius-pill)",
      background: tone === "glass" ? "var(--overlay-glass)" : "var(--white)",
      backdropFilter: tone === "glass" ? "var(--blur-glass)" : "none",
      border: tone === "glass" ? "1px solid var(--border-inverse)" : "1px solid var(--border-default)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: 34,
      height: 34,
      borderRadius: "var(--radius-pill)",
      objectFit: "cover",
      border: "2px solid var(--white)",
      marginLeft: i ? -12 : 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: 16,
      color: tone === "glass" ? "var(--white)" : "var(--navy-900)"
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-caption-size)",
      color: tone === "glass" ? "rgba(255,255,255,.8)" : "var(--text-body)"
    }
  }, label)));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small pill label: emergency flags, trust markers, form status. */
function Badge({
  tone = "accent",
  icon,
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: "var(--orange-50)",
      color: "var(--orange-700)"
    },
    navy: {
      background: "var(--navy-50)",
      color: "var(--navy-800)"
    },
    success: {
      background: "rgba(31,157,99,.12)",
      color: "var(--green-500)"
    },
    glass: {
      background: "rgba(255,255,255,.18)",
      color: "var(--white)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: "var(--fw-medium)",
      ...(tones[tone] || tones.accent),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container: white, hairline, 16px radius, soft shadow on hover. */
function Card({
  tone = "default",
  padding = 28,
  interactive,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      color: "var(--navy-900)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      border: "1px solid transparent",
      color: "var(--navy-900)"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "1px solid transparent",
      color: "var(--white)"
    },
    glass: {
      background: "var(--overlay-glass)",
      border: "1px solid var(--border-inverse)",
      color: "var(--white)",
      backdropFilter: "var(--blur-glass)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      transition: "var(--transition-base)",
      boxShadow: interactive && hover ? "var(--shadow-raised)" : "var(--shadow-none)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      ...(tones[tone] || tones.default),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Orange circle-check + one-line benefit. Used in two-column lists. */
function CheckItem({
  children,
  tone = "dark",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 17,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-size)",
      lineHeight: 1.4,
      color: tone === "light" ? "rgba(255,255,255,.85)" : "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Uppercase orange label that opens every section. */
function Eyebrow({
  tone = "accent",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-eyebrow-size)",
      lineHeight: "var(--type-eyebrow-lh)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--type-eyebrow-ls)",
      textTransform: "uppercase",
      color: tone === "muted" ? "var(--navy-300)" : "var(--orange-500)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + display heading + optional lede. */
function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
  size = "h2",
  style,
  ...rest
}) {
  const sizes = {
    display: ["var(--type-display-size)", "var(--type-display-lh)"],
    h1: ["var(--type-h1-size)", "var(--type-h1-lh)"],
    h2: ["var(--type-h2-size)", "var(--type-h2-lh)"]
  };
  const [fs, lh] = sizes[size] || sizes.h2;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: fs,
      lineHeight: lh,
      fontWeight: "var(--type-h2-weight)",
      letterSpacing: "var(--type-h2-ls)",
      color: tone === "light" ? "var(--white)" : "var(--text-heading)",
      textWrap: "balance"
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 520,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: tone === "light" ? "rgba(255,255,255,.82)" : "var(--text-body)",
      textWrap: "pretty"
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon + title + one-line description tile for the services grid. */
function ServiceCard({
  icon = "wrench",
  title,
  description,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--orange-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--orange-500)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--type-h3-size)",
      lineHeight: "var(--type-h3-lh)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--type-h3-ls)",
      color: "var(--navy-900)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big number + caption. Four across in the credibility band. */
function Stat({
  value,
  label,
  align = "center",
  tone = "dark",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--type-stat-size)",
      lineHeight: "var(--type-stat-lh)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--type-stat-ls)",
      color: tone === "light" ? "var(--white)" : "var(--navy-900)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-lh)",
      color: tone === "light" ? "rgba(255,255,255,.75)" : "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill text field used in the booking strip and contact forms. */
function Input({
  tone = "default",
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      height: 46,
      width: "100%",
      padding: "0 20px",
      borderRadius: "var(--radius-pill)",
      background: tone === "subtle" ? "var(--slate-50)" : "var(--white)",
      border: `1px solid ${invalid ? "var(--red-500)" : focus ? "var(--orange-400)" : "var(--border-default)"}`,
      boxShadow: focus ? "0 0 0 3px rgba(242,106,34,.14)" : "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-size)",
      color: "var(--navy-900)",
      outline: "none",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line field for the contact form. Rounded rectangle, not a pill. */
function Textarea({
  rows = 5,
  invalid,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      padding: "14px 20px",
      borderRadius: "var(--radius-lg)",
      background: "var(--white)",
      border: `1px solid ${invalid ? "var(--red-500)" : focus ? "var(--orange-400)" : "var(--border-default)"}`,
      boxShadow: focus ? "0 0 0 3px rgba(242,106,34,.14)" : "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--navy-900)",
      outline: "none",
      resize: "vertical",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Header navigation item. Active state is a colour change, never an underline. */
function NavLink({
  active,
  tone = "light",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = tone === "light" ? "rgba(255,255,255,.85)" : "var(--slate-500)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-nav-size)",
      fontWeight: "var(--fw-medium)",
      textDecoration: "none",
      cursor: "pointer",
      color: active ? "var(--orange-500)" : hover ? tone === "light" ? "var(--white)" : "var(--navy-900)" : base,
      transition: "color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tab set — used for Our Mission / Our Expertise / Our Values. */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? items[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: 40,
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, rest), items.map(item => {
    const on = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(item),
      style: {
        background: "none",
        border: "none",
        padding: "0 0 12px",
        marginBottom: -1,
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: 16,
        fontWeight: "var(--fw-medium)",
        color: on ? "var(--orange-500)" : "var(--navy-900)",
        borderBottom: `2px solid ${on ? "var(--orange-500)" : "transparent"}`,
        transition: "var(--transition-base)"
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  NavLink,
  Button,
  Icon,
  IconButton,
  Input,
  Badge
} = window.FixFlowDesignSystem_20ef2c;
function TopBar() {
  const item = (icon, text) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      color: "rgba(255,255,255,.8)",
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 13
  }), " ", text);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy-800)",
      padding: "9px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 40px",
      display: "flex",
      justifyContent: "center",
      gap: 28
    }
  }, item("phone", "(123) 456-7890"), item("mail", "support@fixflow.com"), item("clock", "24/7 Emergency Service")));
}
function Header({
  route,
  go,
  tone = "light"
}) {
  const nav = [["about", "About Us"], ["services", "Services"], ["blog", "Blog"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "22px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: tone
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 36
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement(NavLink, {
    key: id,
    tone: tone,
    active: route === id,
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "phone",
    onClick: () => go("contact")
  }, "(124) 567 8900")));
}
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: 15,
      color: "var(--white)"
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l,
    tone: "light",
    onClick: e => {
      e.preventDefault();
      go("services");
    },
    style: {
      fontSize: 13.5
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-900)",
      padding: "64px 0 28px",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      color: "rgba(255,255,255,.65)",
      maxWidth: 300
    }
  }, "From minor leaks to major plumbing emergencies, our expert team delivers fast, reliable, affordable solutions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "facebook",
    tone: "glass",
    size: 36
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "instagram",
    tone: "glass",
    size: 36
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    tone: "glass",
    size: 36
  }))), col("Services", ["Leak Repair", "Drain Cleaning", "Water Heaters", "Emergency Callout"]), col("Company", ["About Us", "Our Team", "Careers", "Blog"]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: 15,
      color: "var(--white)"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center",
      color: "rgba(255,255,255,.65)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " (123) 456-7890"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center",
      color: "rgba(255,255,255,.65)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), " support@fixflow.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      alignItems: "center",
      color: "rgba(255,255,255,.65)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " 118 Harbour St, Springfield"), /*#__PURE__*/React.createElement(Badge, {
    tone: "glass",
    icon: "clock",
    style: {
      alignSelf: "flex-start",
      marginTop: 4
    }
  }, "24/7 Emergency"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,.12)",
      display: "flex",
      justifyContent: "space-between",
      color: "rgba(255,255,255,.5)",
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 FixFlow Plumbing Services."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Terms")))));
}
function Section({
  children,
  background = "var(--white)",
  pad = 96,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background,
      padding: `${pad}px 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 40px"
    }
  }, children));
}
Object.assign(window, {
  TopBar,
  Header,
  Footer,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Textarea,
  SectionHeading,
  Card,
  Badge,
  Icon,
  CheckItem
} = window.FixFlowDesignSystem_20ef2c;
function ContactScreen({
  go
}) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Header, {
    route: "contact",
    go: go,
    tone: "light"
  })), /*#__PURE__*/React.createElement(Section, {
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact Us",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Talk to a plumber,", /*#__PURE__*/React.createElement("br", null), "not an answering service"),
    lede: "Call any hour of the day, or send the form and we'll ring you straight back."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["phone", "(123) 456-7890", "Emergency line, 24/7"], ["mail", "support@fixflow.com", "Quotes and scheduling"], ["map-pin", "118 Harbour St, Springfield", "Mon–Sat, 7am–7pm"]].map(([icon, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--orange-50)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: "var(--orange-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: "var(--fw-semibold)",
      color: "var(--navy-900)"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-body-sm-size)",
      color: "var(--text-body)"
    }
  }, b))))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/team-two-workers.png",
    alt: "",
    style: {
      width: "100%",
      height: 220,
      objectFit: "cover",
      borderRadius: "var(--radius-photo)"
    }
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 36,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      boxShadow: "var(--shadow-card)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "circle-check"
  }, "Request received"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: "var(--fw-semibold)",
      color: "var(--navy-900)"
    }
  }, "Thanks", form.name ? `, ${form.name.split(" ")[0]}` : "", " \u2014 we'll call you back within 15 minutes."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)"
    }
  }, "If it's an emergency, don't wait for us \u2014 call (123) 456-7890 and we'll dispatch the nearest plumber."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    }
  }, "Send another request")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: "var(--fw-semibold)",
      color: "var(--navy-900)"
    }
  }, "Request a free quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Enter your full name",
    value: form.name,
    onChange: set("name")
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Phone Number",
    value: form.phone,
    onChange: set("phone")
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email address",
    value: form.email,
    onChange: set("email")
  }), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Tell us about the problem",
    rows: 5,
    value: form.message,
    onChange: set("message")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CheckItem, null, "No callout fee on quoted work."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Submit Request")))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Eyebrow,
  SectionHeading,
  Stat,
  CheckItem,
  Card,
  ServiceCard,
  AvatarStack,
  Badge,
  Icon,
  Tabs
} = window.FixFlowDesignSystem_20ef2c;
const TAB_COPY = {
  "Our Mission": "At FixFlow, our mission is to provide fast, reliable, and high-quality plumbing services tailored to meet the unique needs of our customers. We strive to be your trusted partner in keeping your home and business.",
  "Our Expertise": "Twenty-five years on the tools, across residential and commercial systems — from hidden slab leaks to full repipes. Every FixFlow plumber is licensed, background-checked and continuously trained.",
  "Our Values": "Honest pricing quoted before we start, tidy workmanship, and a fix that holds. If something isn't right, we come back — no callout fee, no argument."
};
function HomeScreen({
  go,
  onBook
}) {
  const [tab, setTab] = React.useState("Our Mission");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero-plumber-kitchen.png",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "70% 40%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Header, {
    route: "home",
    go: go,
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "72px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    size: "display",
    eyebrow: "Your Trusted Plumbing Experts",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Fast Solutions for", /*#__PURE__*/React.createElement("br", null), "Plumbing Problems"),
    lede: "From minor leaks to major plumbing emergencies, our expert team is ready to deliver fast, reliable, affordable solutions ensuring."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("contact")
  }, "Get a Free Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go("contact")
  }, "Contact Us Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    images: ["https://i.pravatar.cc/80?img=12", "https://i.pravatar.cc/80?img=32", "https://i.pravatar.cc/80?img=52"],
    count: "130K +",
    label: "Customer Review"
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "glass",
    padding: 22,
    style: {
      minWidth: 430
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: "var(--fw-medium)",
      textAlign: "center"
    }
  }, "Recognized for Excellence in Plumbing Services!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 16
    }
  }, ["award", "star", "badge-check", "shield-check", "trophy"].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 46,
      height: 46,
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,.9)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20,
    color: "var(--navy-800)"
  }))))))))), /*#__PURE__*/React.createElement(Section, {
    pad: 56
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: 36,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      lineHeight: 1.3,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "-.015em",
      color: "var(--navy-900)"
    }
  }, "Quick Plumbing Service", /*#__PURE__*/React.createElement("br", null), "Book in 60 Seconds."), sent ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "circle-check"
  }, "Request received \u2014 we'll call you back in minutes.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flex: "0 1 560px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Enter your full name",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Phone Number",
    value: phone,
    onChange: e => setPhone(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setSent(true);
      onBook && onBook();
    }
  }, "Submit Request")))), /*#__PURE__*/React.createElement(Section, {
    pad: 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/team-two-workers.png",
    alt: "",
    style: {
      width: "100%",
      height: 380,
      objectFit: "cover",
      borderRadius: "var(--radius-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who We Are",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Plumbing Solutions", /*#__PURE__*/React.createElement("br", null), "for Every Home")
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(TAB_COPY),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, TAB_COPY[tab]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 40px"
    }
  }, /*#__PURE__*/React.createElement(CheckItem, null, "Reliable, fast, and efficient service."), /*#__PURE__*/React.createElement(CheckItem, null, "Skilled plumbers, quality work."), /*#__PURE__*/React.createElement(CheckItem, null, "Affordable pricing, no surprises."), /*#__PURE__*/React.createElement(CheckItem, null, "Satisfaction guaranteed, every time."))))), /*#__PURE__*/React.createElement(Section, {
    pad: 64
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "Years of Experience"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "Customer Satisfaction Guarantee"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "67+",
    label: "Award-Winning Service"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "24/7",
    label: "Emergency Plumbing Services"
  }))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What We Do",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Services We Provide")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconAfter: "arrow-right",
    onClick: () => go("services")
  }, "View all services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "droplets",
    title: "Leak Detection",
    description: "Thermal and acoustic tracing finds hidden leaks without tearing up your floors."
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "shower-head",
    title: "Drain Cleaning",
    description: "High-pressure jetting clears blocked drains and keeps them clear for longer."
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "flame",
    title: "Water Heaters",
    description: "Repair, replacement and servicing for tank and tankless systems, same week."
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  ServiceCard,
  Card,
  CheckItem,
  Badge,
  Icon,
  Stat
} = window.FixFlowDesignSystem_20ef2c;
const SERVICES = [["droplets", "Leak Detection & Repair", "Thermal and acoustic tracing finds hidden leaks without tearing up your floors."], ["shower-head", "Drain Cleaning", "High-pressure jetting clears blocked drains and keeps them clear for longer."], ["flame", "Water Heater Service", "Repair, replacement and servicing for tank and tankless systems, same week."], ["wrench", "Fixture Installation", "Taps, sinks, toilets and showers fitted properly, sealed and pressure tested."], ["hammer", "Repiping", "Full or partial repipes in copper and PEX, planned around your household."], ["siren", "Emergency Callout", "A licensed plumber on your doorstep around the clock, holidays included."]];
function ServicesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--navy-800)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Header, {
    route: "services",
    go: go,
    tone: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "56px 40px 72px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    size: "h1",
    eyebrow: "What We Do",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Plumbing Services,", /*#__PURE__*/React.createElement("br", null), "Done Once and Done Right"),
    lede: "Residential and commercial work across the whole system \u2014 diagnosis, repair, replacement and maintenance."
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, SERVICES.map(([icon, title, description]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title,
    description: description
  })))), /*#__PURE__*/React.createElement(Section, {
    background: "var(--surface-subtle)",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How It Works",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Booked in 60 seconds,", /*#__PURE__*/React.createElement("br", null), "fixed the same day")
  }), [["phone-call", "Tell us what's wrong", "Call or send the form — we'll ask a few questions to size the job."], ["calendar-check", "Pick your slot", "Two-hour arrival windows, including evenings and weekends."], ["wrench", "We fix it and clean up", "Fixed price agreed before work starts. No surprises on the invoice."]].map(([icon, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: "var(--orange-500)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: "var(--fw-semibold)",
      color: "var(--navy-900)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      color: "var(--text-body)"
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      alignSelf: "flex-start"
    },
    onClick: () => go("contact")
  }, "Get a Free Quote")), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "shield-check"
  }, "Every job covered"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: "var(--fw-semibold)",
      color: "var(--navy-900)"
    }
  }, "What's always included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CheckItem, null, "Licensed, insured, background-checked plumbers."), /*#__PURE__*/React.createElement(CheckItem, null, "Fixed price quoted before we start."), /*#__PURE__*/React.createElement(CheckItem, null, "12-month workmanship guarantee."), /*#__PURE__*/React.createElement(CheckItem, null, "Site left clean, every visit.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      paddingTop: 8,
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "Years of Experience",
    align: "left"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "Satisfaction Guarantee",
    align: "left"
  }))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
