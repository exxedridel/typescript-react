interface Props {
   // children: JSX.Element or JSX.Element[]
   // here we can still add children by props, if really needed
   subs: Array<{
      nick: string
      avatar: string
      subMonths: number
      description?: string
   }>
}

// this way we can't add any children, respecting TS principles ✔. 
const List = ({subs}: Props) => {

   // Can also be render with the method renderList, like this:
   
   // const renderList = () => {
   //    return subs.map(sub => {
   //       <li>
   //          <img src="" alt="" />
   //          <h4></h4>
   //          <p></p>
   //       </li>
   //    })
   // } 

   return (
      <ul>
         {
            subs.map((sub) => {
               return (
                  <li key={sub.nick}>
                     <img src={sub.avatar} alt={"Avatar for ${sub.nick}"} />
                     <h4>
                        {sub.nick} (<small>{sub.subMonths}</small>)
                     </h4>
                     <p>
                        {sub.description?.substring(0, 21)}
                        {sub.description ? <a href=""><small>... ver más</small></a> : ""}
                     </p>
                  </li>
               );
            }
         )}
      </ul>
   )
}

export default List;