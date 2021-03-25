import React, { useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import db from '../Firebase';
import SidebarOptions from './SidebarOptions';
import { useAuthValue } from '../Auth/AuthProvider';


import '../styles/sidebar.css';


function Sidebar() {

    const [channels,setChannels] = useState([]);
    const [{user}] = useAuthValue();

    useEffect(() => {
        // code for loading the sidebar 
        db.collection('rooms').onSnapshot(
            (snapshot)=>(
                setChannels(snapshot.docs.map(
                    (doc)=>({
                        id : doc.id,
                        name: doc.data().name,
                    })
                ))
            )
        )
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info" >
                    <h2>Slacker Name</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title={'Threads'} />
            <SidebarOptions Icon={InboxIcon} title={'Mentions & Reactions'} />
            <SidebarOptions Icon={DraftsIcon} title={'Saved Items'} />
            <SidebarOptions Icon={BookmarkBorderIcon} title={'Channel Browser'} />
            <SidebarOptions Icon={PeopleAltIcon} title={'People & User Groups'} />
            <SidebarOptions Icon={AppsIcon} title={'Apps'} />
            <SidebarOptions Icon={FileCopyIcon} title={'File Browser'} />
            <SidebarOptions Icon={ExpandLessIcon} title={'Show Less'} />
            <hr/>
            <SidebarOptions Icon={ExpandMoreIcon} title={'Channels'} />
            <hr/>
            <SidebarOptions Icon={AddIcon} addChannelOptions title={'Add Channels'} />

            {/* {connect to DB for all the channels } */}
            {/* {sidebarOptions} */}
            {channels.map(
                (channel)=>{return(
                    <SidebarOptions title={channel.name} id={channel.id} />
                )}
            )}

        </div>
    )
}

export default Sidebar
