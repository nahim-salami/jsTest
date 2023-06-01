import Axios from "axios";
import React, { useContext, useEffect, useLayoutEffect } from "react"
import SecondBanner from "./SecondBanner"
import "../styles/Layout.css"
import { DocsContext } from "./DocsContext"
import { getCookie, setCookie, apiUrl, apiKey, apiBaseUrl } from "../components/utils";

var url = document.location.origin;

const getDocData = async function (data) {
  return await Axios.get(apiUrl.componentlist, data)
}

const getFolderData = async function (data) {
  return await Axios.get(apiUrl.folderList, data)
}
function Layout({ children, docs, type, fileType }, ) {
  const { setActiveDocs, setSearch, setCheckeds } = useContext(DocsContext)
  const msfbUserData = JSON.parse(getCookie("msfb-user-data"));

  useLayoutEffect(() => {
    if(fileType != "folder") {
      getDocData({user:msfbUserData, apiKey: apiKey.public}).then((response)=>{
        setActiveDocs((response.data && typeof response.data !== "undefined") ? response.data : []);
      })
    }
    else {
      getFolderData({user:msfbUserData, apiKey: apiKey.public}).then((response)=>{
        setActiveDocs((response.data && typeof response.data !== "undefined") ? response.data : []);
      })
    }
    setSearch("")
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setCheckeds([])
  }, [setCheckeds])

  return (
    <div className="Layout">
      <SecondBanner />
      {children}
    </div>
  )
}

export default Layout
