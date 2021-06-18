import Link from 'next/link';
import styles from "../styles/Footer.module.css";
import SVGInstagram from "./icons/SVGInstagram";
import SVGFacebook from "./icons/SVGFacebook";
import SVGLinkedin from "./icons/SVGLinkedin";
import SVGGithub from "./icons/SVGGithub";
import { INSTAGRAM,FACEBOOK,LINKEDIN,GITHUB } from '../helpers/global-variables';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <span className={styles.icons}>
                    <Link
                        href={GITHUB}
                    >
                        <a target="_blank">{<SVGGithub /> ?? "Github"}</a>
                    </Link>
                </span>
                <span className={styles.icons}>
                    <Link
                        href={LINKEDIN}
                    >
                        <a target="_blank">{<SVGLinkedin /> ?? "Linkedin"}</a>
                    </Link>
                </span>
                <span className={styles.icons}>
                    <Link
                        href={INSTAGRAM}
                    >
                        <a target="_blank">{<SVGInstagram /> ?? "Instagram"}</a>
                    </Link>
                </span>
                <span className={styles.icons}>
                    <Link
                        href={FACEBOOK}
                    >
                        <a target="_blank">{<SVGFacebook /> ?? "Facebook"}</a>
                    </Link>
                </span>
            </div>
            <div className="mt-4">Powered by <b>Amine-Next-JS</b></div>
        </footer >
    )
}