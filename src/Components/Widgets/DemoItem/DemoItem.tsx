import { ReactNode } from "react";
import ColorSwatch from "../Swatch/ColorSwatch";
import ReposWidget from "../ReposWidget/ReposWidget";
import "./DemoItem.css";

export type ColorScheme = {
  name: string;
  light: string;
  lightAccent: string;
  base: string;
  darkAccent: string;
  dark: string;
  black: string;
  white: string;
};

type Props = {
  name: string;
  repos: string[];
  url?: string;
  authScheme?: string;
  cicd?: string;
  colorScheme?: ColorScheme;
  children?: ReactNode;
};

export default function DemoItem({
  name,
  repos,
  url,
  authScheme,
  cicd,
  colorScheme,
  children,
}: Props) {
  return (
    <div className="di__container">
      <div className="di__item">
        <div className="di__label">Name</div>
        <div className="di__value">{name}</div>
      </div>
      <div className="di__item">
        <ReposWidget repos={repos} />
      </div>
      {url && (
        <div className="di__item">
          <div className="di__label">URL</div>
          <div className="di__value">
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        </div>
      )}
      <div className="di__item">
        <div className="di__label">Authentication</div>
        <div className="di__value">{authScheme || "None"}</div>
      </div>
      <div className="di__item">
        <div className="di__label">CI / CD</div>
        <div className="di__value">{cicd}</div>
      </div>
      {colorScheme && (
        <div className="di__item">
          <div className="di__label">Color Scheme</div>
          <div className="di__value">
            <ColorSwatch scheme={colorScheme} />
          </div>
        </div>
      )}
      {children && <div className="di__body">{children}</div>}
    </div>
  );
}
