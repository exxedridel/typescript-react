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

const List = ({ subs }: Props) => {

   const renderList = (): JSX.Element[] => {
      return subs.map(sub => {
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
         )
      })
   }

   return (
      <ul>
         {renderList()}
      </ul>
   )
}

export default List;