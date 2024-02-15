/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Key =
  | "browser"
  | "browser_extension"
  | "cli"
  | "code_editor"
  | "development"
  | "game"
  | "leisure"
  | "library"
  | "messaging"
  | "note_taking"
  | "productivity"
  | "search_engine"
  | "social"
  | "system"
  | "terminal";
export type Name = string;
export type Emoji = string;
/**
 * The categories listed in the README
 */
export type Categories = CategoryItem[];
/**
 * The Name of the software the port is for.
 */
export type Name1 = string;
/**
 * The category that fits the port the most
 */
export type Category =
  | "browser"
  | "browser_extension"
  | "cli"
  | "code_editor"
  | "development"
  | "game"
  | "leisure"
  | "library"
  | "messaging"
  | "note_taking"
  | "productivity"
  | "search_engine"
  | "social"
  | "system"
  | "terminal";
/**
 * The platforms the port supports. Either an array of supported operating systems or "agnostic" (indicating support for all platforms).
 */
export type Platform = OperatingSystems[] | "agnostic";
export type OperatingSystems = "android" | "ios" | "linux" | "macos" | "windows";
/**
 * The fill color for the icon on the website.
 */
export type Color =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender"
  | "text";
/**
 * The icon to use on the website. This should be the same name as the SVG file on https://simpleicons.org/. If a `.svg` suffix is present, it's taken from the local website repository resources.
 */
export type Icon = string;
/**
 * If another port provides the theme for this port, provide the name of the other port here (e.g. `vscode` for `azuredatastudio`, where Azure Data Studio uses the VS Code theme).
 */
export type Alias = string;
/**
 * If the port is hosted on a specific URL, provide it here.
 */
export type URL = string;
export type Name2 = string;
export type URL1 = string;
/**
 * Links to the port on marketplaces, app stores; documentation, preview pages, etc.
 */
export type Links = Link[];
/**
 * Boolean indicating whether the port has been upstreamed.
 */
export type Upstreamed = boolean;
export type Title = string;
export type Link1 = string;
export type Link2 = string;
/**
 * Each showcase listed in the README
 */
export type Showcases = ShowcaseItem[];

export interface PortsSchema {
  categories?: Categories;
  ports?: Ports;
  showcases?: Showcases;
}
export interface CategoryItem {
  key: Key;
  name: Name;
  emoji: Emoji;
}
/**
 * All ports in the catppuccin org.
 */
export interface Ports {
  [k: string]: Port;
}
/**
 * The GitHub repository name of the port.
 *
 * This interface was referenced by `Ports`'s JSON-Schema definition
 * via the `patternProperty` "[A-Za-z0-9_\-]".
 */
export interface Port {
  name: Name1;
  category: Category;
  platform: Platform;
  color?: Color;
  icon?: Icon;
  alias?: Alias;
  url?: URL;
  links?: Links;
  upstreamed?: Upstreamed;
}
export interface Link {
  name: Name2;
  color?: Color;
  icon?: Icon;
  url: URL1;
}
export interface ShowcaseItem {
  title: Title;
  link: Link1;
  description: Link2;
}