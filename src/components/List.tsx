interface Props {
   subs: Array<{
      nick: string
      avatar: string
      subMonths: number
      description?: string
   }>
}

// To be able to use <List>{children}</List> within component
const List: React.FunctionComponent<Props> = ({subs}) => {
   // or List: React.FC<Props>
// * but is not recommended to mantain TS principles *

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