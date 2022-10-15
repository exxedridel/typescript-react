interface Props {
   subs: Array<{
      nick: string
      avatar: string
      subMonths: number
      description?: string
   }>
}
// avoid unecessary "any" use with typed props 

// export default function List(props: Props) {
//    const {subs} = props

// same as above: 
export default function List({subs}: Props) {

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