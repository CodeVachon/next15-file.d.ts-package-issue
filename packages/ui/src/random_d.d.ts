

export type RANDOM_CONFIG_KEY =
  | "CONFIG_VALUE";


export type RANDOM_CSS_COLOR_KEYS =
  | "primary"
  | "primary-dark"
  | "secondary"
  | "secondary-dark";

export interface RANDOM_CONFIG_INSTANCE_SETTINGS {
  id: string;
  SelectedTheme: {
      id: string;
      name: string;
      values: Record<CSSColorKeys, string>;
  };
}
