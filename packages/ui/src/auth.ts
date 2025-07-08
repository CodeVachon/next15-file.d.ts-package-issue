export enum AuthStatus {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  CHECKING = "checking",
}

export enum PermissionItemsEnum {
    Folder = "Folder"
}

export enum PermissionActionsEnum {
    Edit = "edit"
}

export type AuthPermissions = {
  [key in PermissionItemsEnum]?: {
    [key in PermissionActionsEnum]?: boolean;
  };
};