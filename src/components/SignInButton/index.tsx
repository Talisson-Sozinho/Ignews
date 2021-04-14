import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import styles from "./styles.module.scss"

export function SignInButton(){
  const isUserIsLoggedIn = true;

  return isUserIsLoggedIn ? (
    <button className={ styles.signInButton } type="button">
      <FaGithub color="#84d361" />
      UserName GitHub
      <FiX className={ styles.closeIcon } color="#737380" />
    </button>
  ) : (
    <button className={ styles.signInButton } type="button">
      <FaGithub color={"#eba417"} />
      Sign In with GitHub
    </button>
  );
} 