var searchIndex = {};
searchIndex['net2'] = {"items":[[3,"TcpBuilder","net2","An \"in progress\" TCP socket which has not yet been connected or listened.",null,null],[3,"UdpBuilder","","An \"in progress\" UDP socket which has not yet been connected.",null,null],[11,"new_v4","","Constructs a new TcpBuilder with the `AF_INET` domain, the `SOCK_STREAM`\ntype, and with a protocol argument of 0.",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"result"}}],[11,"new_v6","","Constructs a new TcpBuilder with the `AF_INET6` domain, the `SOCK_STREAM`\ntype, and with a protocol argument of 0.",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"result"}}],[11,"bind","","Binds this socket to the specified address.",0,{"inputs":[{"name":"tcpbuilder"},{"name":"t"}],"output":{"name":"result"}}],[11,"listen","","Mark a socket as ready to accept incoming connection requests using\naccept()",0,{"inputs":[{"name":"tcpbuilder"},{"name":"i32"}],"output":{"name":"result"}}],[11,"connect","","Initiate a connection on this socket to the specified address.",0,{"inputs":[{"name":"tcpbuilder"},{"name":"t"}],"output":{"name":"result"}}],[11,"to_tcp_stream","","Converts this builder into a `TcpStream`",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"result"}}],[11,"to_tcp_listener","","Converts this builder into a `TcpListener`",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"tcpbuilder"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_v4","","Constructs a new UdpBuilder with the `AF_INET` domain, the `SOCK_DGRAM`\ntype, and with a protocol argument of 0.",1,{"inputs":[{"name":"udpbuilder"}],"output":{"name":"result"}}],[11,"new_v6","","Constructs a new UdpBuilder with the `AF_INET6` domain, the `SOCK_DGRAM`\ntype, and with a protocol argument of 0.",1,{"inputs":[{"name":"udpbuilder"}],"output":{"name":"result"}}],[11,"bind","","Binds this socket to the specified address.",1,{"inputs":[{"name":"udpbuilder"},{"name":"t"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"udpbuilder"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"set_nodelay","std::net::tcp","",2,{"inputs":[{"name":"tcpstream"},{"name":"bool"}],"output":{"name":"result"}}],[11,"nodelay","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_keepalive","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_keepalive_ms","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"keepalive_ms","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_read_timeout_ms","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout_ms","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_write_timeout_ms","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"write_timeout_ms","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_read_timeout","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_write_timeout","","",2,{"inputs":[{"name":"tcpstream"},{"name":"option"}],"output":{"name":"result"}}],[11,"write_timeout","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_ttl","","",2,{"inputs":[{"name":"tcpstream"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_only_v6","","",2,{"inputs":[{"name":"tcpstream"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"connect","","",2,{"inputs":[{"name":"tcpstream"},{"name":"t"}],"output":{"name":"result"}}],[11,"take_error","","",2,{"inputs":[{"name":"tcpstream"}],"output":{"name":"result"}}],[11,"set_nonblocking","","",2,{"inputs":[{"name":"tcpstream"},{"name":"bool"}],"output":{"name":"result"}}],[11,"set_broadcast","std::net::udp","",3,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"broadcast","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v4","","",3,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_ttl_v4","","",3,{"inputs":[{"name":"udpsocket"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_multicast_loop_v6","","",3,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_ttl","","",3,{"inputs":[{"name":"udpsocket"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_only_v6","","",3,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","",3,{"inputs":[{"name":"udpsocket"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","",3,{"inputs":[{"name":"udpsocket"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","",3,{"inputs":[{"name":"udpsocket"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","",3,{"inputs":[{"name":"udpsocket"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"set_read_timeout_ms","","",3,{"inputs":[{"name":"udpsocket"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout_ms","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_write_timeout_ms","","",3,{"inputs":[{"name":"udpsocket"},{"name":"option"}],"output":{"name":"result"}}],[11,"write_timeout_ms","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_read_timeout","","",3,{"inputs":[{"name":"udpsocket"},{"name":"option"}],"output":{"name":"result"}}],[11,"read_timeout","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"set_write_timeout","","",3,{"inputs":[{"name":"udpsocket"},{"name":"option"}],"output":{"name":"result"}}],[11,"write_timeout","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"take_error","","",3,{"inputs":[{"name":"udpsocket"}],"output":{"name":"result"}}],[11,"connect","","",3,{"inputs":[{"name":"udpsocket"},{"name":"a"}],"output":{"name":"result"}}],[11,"send","","",3,null],[11,"recv","","",3,null],[11,"set_nonblocking","","",3,{"inputs":[{"name":"udpsocket"},{"name":"bool"}],"output":{"name":"result"}}],[11,"set_ttl","std::net::tcp","",4,{"inputs":[{"name":"tcplistener"},{"name":"u32"}],"output":{"name":"result"}}],[11,"ttl","","",4,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"set_only_v6","","",4,{"inputs":[{"name":"tcplistener"},{"name":"bool"}],"output":{"name":"result"}}],[11,"only_v6","","",4,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"take_error","","",4,{"inputs":[{"name":"tcplistener"}],"output":{"name":"result"}}],[11,"set_nonblocking","","",4,{"inputs":[{"name":"tcplistener"},{"name":"bool"}],"output":{"name":"result"}}],[11,"ttl","net2","Sets the value for the `IP_TTL` option on this socket.",0,{"inputs":[{"name":"tcpbuilder"},{"name":"u32"}],"output":{"name":"result"}}],[11,"only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",0,{"inputs":[{"name":"tcpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",0,{"inputs":[{"name":"tcpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"result"}}],[11,"ttl","","Sets the value for the `IP_TTL` option on this socket.",1,{"inputs":[{"name":"udpbuilder"},{"name":"u32"}],"output":{"name":"result"}}],[11,"only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,{"inputs":[{"name":"udpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",1,{"inputs":[{"name":"udpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",1,{"inputs":[{"name":"udpbuilder"}],"output":{"name":"result"}}],[11,"clone","libc::unix","",5,{"inputs":[{"name":"utimbuf"}],"output":{"name":"utimbuf"}}],[11,"clone","","",6,{"inputs":[{"name":"timeval"}],"output":{"name":"timeval"}}],[11,"clone","","",7,{"inputs":[{"name":"timespec"}],"output":{"name":"timespec"}}],[11,"clone","","",8,{"inputs":[{"name":"rlimit"}],"output":{"name":"rlimit"}}],[11,"clone","","",9,{"inputs":[{"name":"rusage"}],"output":{"name":"rusage"}}],[11,"clone","","",10,{"inputs":[{"name":"in_addr"}],"output":{"name":"in_addr"}}],[11,"clone","","",11,{"inputs":[{"name":"in6_addr"}],"output":{"name":"in6_addr"}}],[11,"clone","","",12,{"inputs":[{"name":"ip_mreq"}],"output":{"name":"ip_mreq"}}],[11,"clone","","",13,{"inputs":[{"name":"ipv6_mreq"}],"output":{"name":"ipv6_mreq"}}],[11,"clone","","",14,{"inputs":[{"name":"hostent"}],"output":{"name":"hostent"}}],[11,"clone","","",15,{"inputs":[{"name":"iovec"}],"output":{"name":"iovec"}}],[11,"clone","","",16,{"inputs":[{"name":"pollfd"}],"output":{"name":"pollfd"}}],[11,"clone","libc::unix::notbsd","",17,{"inputs":[{"name":"sockaddr"}],"output":{"name":"sockaddr"}}],[11,"clone","","",18,{"inputs":[{"name":"sockaddr_in"}],"output":{"name":"sockaddr_in"}}],[11,"clone","","",19,{"inputs":[{"name":"sockaddr_in6"}],"output":{"name":"sockaddr_in6"}}],[11,"clone","","",20,{"inputs":[{"name":"sockaddr_un"}],"output":{"name":"sockaddr_un"}}],[11,"clone","","",21,{"inputs":[{"name":"sockaddr_storage"}],"output":{"name":"sockaddr_storage"}}],[11,"clone","","",22,{"inputs":[{"name":"addrinfo"}],"output":{"name":"addrinfo"}}],[11,"clone","","",23,{"inputs":[{"name":"sockaddr_ll"}],"output":{"name":"sockaddr_ll"}}],[11,"clone","","",24,{"inputs":[{"name":"fd_set"}],"output":{"name":"fd_set"}}],[11,"clone","","",25,{"inputs":[{"name":"tm"}],"output":{"name":"tm"}}],[11,"clone","","",26,{"inputs":[{"name":"sched_param"}],"output":{"name":"sched_param"}}],[11,"clone","","",27,{"inputs":[{"name":"dl_info"}],"output":{"name":"dl_info"}}],[11,"clone","","",28,{"inputs":[{"name":"epoll_event"}],"output":{"name":"epoll_event"}}],[11,"clone","","",29,{"inputs":[{"name":"utsname"}],"output":{"name":"utsname"}}],[11,"clone","libc::unix::notbsd::linux","",30,{"inputs":[{"name":"dirent"}],"output":{"name":"dirent"}}],[11,"clone","","",31,{"inputs":[{"name":"dirent64"}],"output":{"name":"dirent64"}}],[11,"clone","","",32,{"inputs":[{"name":"rlimit64"}],"output":{"name":"rlimit64"}}],[11,"clone","","",33,{"inputs":[{"name":"glob_t"}],"output":{"name":"glob_t"}}],[11,"clone","","",34,{"inputs":[{"name":"ifaddrs"}],"output":{"name":"ifaddrs"}}],[11,"clone","","",35,{"inputs":[{"name":"pthread_mutex_t"}],"output":{"name":"pthread_mutex_t"}}],[11,"clone","","",36,{"inputs":[{"name":"pthread_rwlock_t"}],"output":{"name":"pthread_rwlock_t"}}],[11,"clone","","",37,{"inputs":[{"name":"pthread_mutexattr_t"}],"output":{"name":"pthread_mutexattr_t"}}],[11,"clone","","",38,{"inputs":[{"name":"pthread_cond_t"}],"output":{"name":"pthread_cond_t"}}],[11,"clone","","",39,{"inputs":[{"name":"passwd"}],"output":{"name":"passwd"}}],[11,"clone","","",40,{"inputs":[{"name":"statvfs"}],"output":{"name":"statvfs"}}],[11,"clone","","",41,{"inputs":[{"name":"sockaddr_nl"}],"output":{"name":"sockaddr_nl"}}],[11,"clone","","",42,{"inputs":[{"name":"dqblk"}],"output":{"name":"dqblk"}}],[11,"clone","","",43,{"inputs":[{"name":"signalfd_siginfo"}],"output":{"name":"signalfd_siginfo"}}],[11,"clone","","",44,{"inputs":[{"name":"fsid_t"}],"output":{"name":"fsid_t"}}],[11,"clone","","",45,{"inputs":[{"name":"mq_attr"}],"output":{"name":"mq_attr"}}],[11,"clone","","",46,{"inputs":[{"name":"cpu_set_t"}],"output":{"name":"cpu_set_t"}}],[11,"clone","libc::unix::notbsd::linux::other","",47,{"inputs":[{"name":"sigaction"}],"output":{"name":"sigaction"}}],[11,"clone","","",48,{"inputs":[{"name":"stack_t"}],"output":{"name":"stack_t"}}],[11,"clone","","",49,{"inputs":[{"name":"siginfo_t"}],"output":{"name":"siginfo_t"}}],[11,"clone","","",50,{"inputs":[{"name":"glob64_t"}],"output":{"name":"glob64_t"}}],[11,"clone","","",51,{"inputs":[{"name":"ucred"}],"output":{"name":"ucred"}}],[11,"clone","","",52,{"inputs":[{"name":"statfs"}],"output":{"name":"statfs"}}],[11,"clone","","",53,{"inputs":[{"name":"msghdr"}],"output":{"name":"msghdr"}}],[11,"clone","","",54,{"inputs":[{"name":"termios"}],"output":{"name":"termios"}}],[11,"clone","","",55,{"inputs":[{"name":"flock"}],"output":{"name":"flock"}}],[11,"clone","libc::unix::notbsd::linux::other::b64","",56,{"inputs":[{"name":"sigset_t"}],"output":{"name":"sigset_t"}}],[11,"clone","libc::unix::notbsd::linux::other::b64::x86_64","",57,{"inputs":[{"name":"stat"}],"output":{"name":"stat"}}],[11,"clone","","",58,{"inputs":[{"name":"stat64"}],"output":{"name":"stat64"}}],[11,"clone","","",59,{"inputs":[{"name":"pthread_attr_t"}],"output":{"name":"pthread_attr_t"}}],[11,"clone","libc::unix::notbsd::linux::other","",60,{"inputs":[{"name":"ipc_perm"}],"output":{"name":"ipc_perm"}}],[11,"clone","","",61,{"inputs":[{"name":"shmid_ds"}],"output":{"name":"shmid_ds"}}],[11,"from_raw_fd","net2","",0,{"inputs":[{"name":"tcpbuilder"},{"name":"c_int"}],"output":{"name":"tcpbuilder"}}],[11,"as_raw_fd","","",0,{"inputs":[{"name":"tcpbuilder"}],"output":{"name":"c_int"}}],[11,"from_raw_fd","","",1,{"inputs":[{"name":"udpbuilder"},{"name":"c_int"}],"output":{"name":"udpbuilder"}}],[11,"as_raw_fd","","",1,{"inputs":[{"name":"udpbuilder"}],"output":{"name":"c_int"}}],[0,"unix","","Unix-specific extensions to the `std::net` types.",null,null],[8,"UnixTcpBuilderExt","net2::unix","Unix-specific extensions for the `TcpBuilder` type in this library.",null,null],[10,"reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",62,{"inputs":[{"name":"unixtcpbuilderext"},{"name":"bool"}],"output":{"name":"result"}}],[8,"UnixUdpBuilderExt","","Unix-specific extensions for the `UdpBuilder` type in this library.",null,null],[10,"reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",63,{"inputs":[{"name":"unixudpbuilderext"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_port","net2","",0,{"inputs":[{"name":"tcpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[11,"reuse_port","","",1,{"inputs":[{"name":"udpbuilder"},{"name":"bool"}],"output":{"name":"result"}}],[8,"TcpStreamExt","","Extension methods for the standard [`TcpStream` type][link] in `std::net`.",null,null],[10,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_keepalive_ms","","Sets whether keepalive messages are enabled to be sent on this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"keepalive_ms","","Returns whether keepalive messages are enabled on this socket, and if so\nthe amount of milliseconds between them.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so\nthe duration of time between them.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_read_timeout_ms","","Sets the `SO_RCVTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"set_read_timeout","","Sets the `SO_RCVTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"read_timeout_ms","","Gets the value of the `SO_RCVTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"read_timeout","","Gets the value of the `SO_RCVTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_write_timeout_ms","","Sets the `SO_SNDTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"set_write_timeout","","Sets the `SO_SNDTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"option"}],"output":{"name":"result"}}],[10,"write_timeout_ms","","Gets the value of the `SO_SNDTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"write_timeout","","Gets the value of the `SO_SNDTIMEO` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"connect","","Executes a `connect` operation on this socket, establishing a connection\nto the host specified by `addr`.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"t"}],"output":{"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",64,{"inputs":[{"name":"tcpstreamext"}],"output":{"name":"result"}}],[10,"set_nonblocking","","Moves this TCP stream into or out of nonblocking mode.",64,{"inputs":[{"name":"tcpstreamext"},{"name":"bool"}],"output":{"name":"result"}}],[8,"TcpListenerExt","","Extension methods for the standard [`TcpListener` type][link] in `std::net`.",null,null],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",65,{"inputs":[{"name":"tcplistenerext"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",65,{"inputs":[{"name":"tcplistenerext"}],"output":{"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",65,{"inputs":[{"name":"tcplistenerext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",65,{"inputs":[{"name":"tcplistenerext"}],"output":{"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",65,{"inputs":[{"name":"tcplistenerext"}],"output":{"name":"result"}}],[10,"set_nonblocking","","Moves this TCP listener into or out of nonblocking mode.",65,{"inputs":[{"name":"tcplistenerext"},{"name":"bool"}],"output":{"name":"result"}}],[8,"UdpSocketExt","","Extension methods for the standard [`UdpSocket` type][link] in `std::net`.",null,null],[10,"set_broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"u32"}],"output":{"name":"result"}}],[10,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"u32"}],"output":{"name":"result"}}],[10,"ttl","","Gets the value of the `IP_TTL` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"bool"}],"output":{"name":"result"}}],[10,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",66,{"inputs":[{"name":"udpsocketext"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[10,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",66,{"inputs":[{"name":"udpsocketext"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[10,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",66,{"inputs":[{"name":"udpsocketext"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[10,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",66,{"inputs":[{"name":"udpsocketext"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[10,"set_read_timeout_ms","","Sets the `SO_RCVTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"option"}],"output":{"name":"result"}}],[10,"set_read_timeout","","Sets the `SO_RCVTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"option"}],"output":{"name":"result"}}],[10,"read_timeout_ms","","Gets the value of the `SO_RCVTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"read_timeout","","Gets the value of the `SO_RCVTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"set_write_timeout_ms","","Sets the `SO_SNDTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"option"}],"output":{"name":"result"}}],[10,"set_write_timeout","","Sets the `SO_SNDTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"},{"name":"option"}],"output":{"name":"result"}}],[10,"write_timeout_ms","","Gets the value of the `SO_SNDTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"write_timeout","","Gets the value of the `SO_SNDTIMEO` option for this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"take_error","","Get the value of the `SO_ERROR` option on this socket.",66,{"inputs":[{"name":"udpsocketext"}],"output":{"name":"result"}}],[10,"connect","","Connects this UDP socket to a remote address, allowing the `send` and\n`recv` syscalls to be used to send data and also applies filters to only\nreceive data from the specified address.",66,{"inputs":[{"name":"udpsocketext"},{"name":"a"}],"output":{"name":"result"}}],[10,"send","","Sends data on the socket to the remote address to which it is connected.",66,null],[10,"recv","","Receives data on the socket from the remote address to which it is\nconnected.",66,null],[10,"set_nonblocking","","Moves this UDP socket into or out of nonblocking mode.",66,{"inputs":[{"name":"udpsocketext"},{"name":"bool"}],"output":{"name":"result"}}]],"paths":[[3,"TcpBuilder"],[3,"UdpBuilder"],[3,"TcpStream"],[3,"UdpSocket"],[3,"TcpListener"],[3,"utimbuf"],[3,"timeval"],[3,"timespec"],[3,"rlimit"],[3,"rusage"],[3,"in_addr"],[3,"in6_addr"],[3,"ip_mreq"],[3,"ipv6_mreq"],[3,"hostent"],[3,"iovec"],[3,"pollfd"],[3,"sockaddr"],[3,"sockaddr_in"],[3,"sockaddr_in6"],[3,"sockaddr_un"],[3,"sockaddr_storage"],[3,"addrinfo"],[3,"sockaddr_ll"],[3,"fd_set"],[3,"tm"],[3,"sched_param"],[3,"Dl_info"],[3,"epoll_event"],[3,"utsname"],[3,"dirent"],[3,"dirent64"],[3,"rlimit64"],[3,"glob_t"],[3,"ifaddrs"],[3,"pthread_mutex_t"],[3,"pthread_rwlock_t"],[3,"pthread_mutexattr_t"],[3,"pthread_cond_t"],[3,"passwd"],[3,"statvfs"],[3,"sockaddr_nl"],[3,"dqblk"],[3,"signalfd_siginfo"],[3,"fsid_t"],[3,"mq_attr"],[3,"cpu_set_t"],[3,"sigaction"],[3,"stack_t"],[3,"siginfo_t"],[3,"glob64_t"],[3,"ucred"],[3,"statfs"],[3,"msghdr"],[3,"termios"],[3,"flock"],[3,"sigset_t"],[3,"stat"],[3,"stat64"],[3,"pthread_attr_t"],[3,"ipc_perm"],[3,"shmid_ds"],[8,"UnixTcpBuilderExt"],[8,"UnixUdpBuilderExt"],[8,"TcpStreamExt"],[8,"TcpListenerExt"],[8,"UdpSocketExt"]]};
initSearch(searchIndex);