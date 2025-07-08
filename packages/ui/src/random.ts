export type CONFIG_KEY =
  | "CONFIG_VALUE";


export type CSS_COLOR_KEYS =
  | "primary"
  | "primary-dark"
  | "secondary"
  | "secondary-dark";

export interface CONFIG_INSTANCE_SETTINGS {
  id: string;
  SelectedTheme: {
      id: string;
      name: string;
      values: Record<CSS_COLOR_KEYS, string>;
  };
}
