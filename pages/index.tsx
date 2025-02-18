import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}


        <c-c style={{ backgroundColor: "pink", height: 500, width: "100%" }}>
          <br-x/>
          <br-x/>
          <f-cse style={{width:"100%"}}>
            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>
          </f-cse>
          <br-x/>
          <f-cse style={{width:"100%"}}>
            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>
          </f-cse>
          <br-x/>
          
          <f-cse style={{width:"100%"}}>
            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "brown", borderRadius: 5, color: "white" }}>
              Hi, we are turingf group
            </f-cc>
          </f-cse>
        </c-c>

      </Window>


    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  return {
    props: {
      data: global.QSON.stringify({
        session,
        // nlangs,
      })
    },
  }
}