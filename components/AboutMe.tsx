import React, { FC, useContext, useState, useEffect } from "react";
import cx from "classnames";
import Image from "next/image";
import MatrixRain from "./MatrixRain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/AboutMe.module.css";
import { ThemeCtx } from "../pages/_app";
import { Button, Overlay, Card, Elevation, Classes, Intent } from "@blueprintjs/core";
import { expList, descriptionList, shortPara, social } from "../lib/aboutme";
import myface from "../public/myface.png";

interface TaskDescType {
    task_desc: string;
    type: string;
    link: string;
}
interface ExpType {
    role: string;
    where: string;
    date: string;
    tech: string[];
    desc: TaskDescType[];
}

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const clampText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    return `${text.substring(0, maxLength - 3)}...`;
}

// https://colorlib.com/wp/resume-website-templates/
export const AboutMe: FC = () => {
    const { theme } = useContext(ThemeCtx);
    const [openOverlay, setOpenOverlay] = useState<boolean>(false);
    const [overlayContent, setOverlayContent] = useState<ExpType | null>(null);
    const toggleOverlay = () => {
        setOpenOverlay(!openOverlay);
    };

    const handleCardClick = (k: ExpType): void => {
        toggleOverlay();
        setOverlayContent(k);
    };

    return (
        <div className={cx(styles["about-me"], theme)}>
            <div className={styles["cool-picture"]}>
                <MatrixRain className={styles["matrix-rain"]} />
                <Image className={styles["overlay-photo"]} src={myface} loader={myLoader} alt=""/>
                <div className={styles["intro"]}>
                    <div className={styles["name"]}>
                        <h1>
                            <b>Tai D. Nguyen</b>
                        </h1>
                    </div>
                    <div className={styles["jobs"]}>AI Researcher, Computer & Software Engineer</div>
                    <div className={styles["social"]}>
                        <ul className={styles["social-list"]}>
                            {Object.keys(social).map((key, idx) => {
                                return (
                                    <li id={key} key={key}>
                                        <a href={social[key]["href"]}>
                                            <FontAwesomeIcon icon={social[key]["icon"]} />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx(styles["resume"], theme)}>
                <div className={styles["short-desc"]}>
                    <div className={styles["desc"]}>
                        <b>about me</b>
                    </div>
                    <div className={styles["desc-list"]}>
                        {descriptionList.map((k, i) => {
                            return (
                                <div className={styles["desc-item"]} key={k}>
                                    {k}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles["desc-para"]}>{shortPara}</div>

                    <hr className="hr1" />
                </div>

                <div className={styles["tech-knowledge"]}>
                    <div className={styles["desc"]}>
                        <b>my experience</b>
                    </div>
                    <div className={styles["exp-list"]}>
                        <Overlay
                            isOpen={openOverlay}
                            onClose={toggleOverlay}
                            transitionDuration={100}
                            className={cx(Classes.OVERLAY_SCROLL_CONTAINER, styles["exp-overlay"])}
                        >
                            {overlayContent != null ? (
                                <Card
                                    className={cx(styles["exp-card"], styles["exp-overlay-card"])}
                                    interactive={false}
                                    elevation={Elevation.TWO}
                                >
                                    <Button
                                        className={styles["overlay-close-btn"]}
                                        onClick={toggleOverlay}
                                        intent={Intent.WARNING}
                                        text="X"
                                    />
                                    <div id={styles["exp-role"]}>{overlayContent.role}</div>
                                    <div id={styles["exp-where"]}>{overlayContent.where}</div>
                                    <ul id={styles["exp-tech"]}>
                                        {overlayContent.tech.map((k, i) => {
                                            return <li key={"overlay_tech_" + i}>{k}</li>;
                                        })}
                                    </ul>
                                    <ul>
                                    {
                                        overlayContent.desc.map((desc, j) => {
                                            return <li key={"overlay_desc_" + j}>{desc.task_desc}</li>
                                        })
                                    }
                                    </ul>
                                </Card>
                            ) : (
                                <div></div>
                            )}
                        </Overlay>
                        {expList.map((k, i) => {
                            return (
                                <Card
                                    className={cx(styles["exp-card"], styles["exp-card-elevation"])}
                                    interactive={false}
                                    key={i}
                                    onClick={(e) => handleCardClick(k)}
                                >
                                    <div id={styles["exp-role"]}>{k.role}</div>
                                    <div id={styles["exp-where"]}>{k.where}</div>
                                    <ul id={styles["exp-tech"]}>
                                        {k.tech.map((k2, i2) => {
                                            return <li key={i + "_" + i2}>{k2}</li>;
                                        })}
                                    </ul>
                                    <p id={styles["exp-desc"]}>{clampText(k.desc.map(d => "- " + d.task_desc).join(" //\n"), 150)}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
